import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

/**
 * CONSOLIDATED COMPONENTS
 * These are inlined to ensure the preview environment resolves all dependencies correctly.
 */

const Button = ({ children, onClick, type = 'button', className = '', disabled = false, ...props }) => (
  <motion.button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-emerald-600 text-white rounded-vibe hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

const Input = ({ label, type = 'text', value, onChange, placeholder, className = '', readOnly = false, ...props }) => (
  <div className="mb-4">
    {label && <label className="block text-slate-700 text-sm font-bold mb-2">{label}</label>}
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`shadow-vibe appearance-none border border-slate-200 rounded-vibe w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${readOnly ? 'bg-gray-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    />
  </div>
);

/**
 * CONSOLIDATED SERVICES & UTILITIES
 */

// Simple Axios instance
const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// Weather Service for Rainfall only
const weatherService = {
  async getWeatherData(city) {
    const key = import.meta.env?.VITE_WEATHER_API_KEY || "";
    if (!key) throw new Error("API Key missing");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
    const response = await axios.get(url);
    return {
      rainfall: response.data.rain ? (response.data.rain['1h'] || response.data.rain['3h'] || 0) : 0
    };
  }
};

// Image Service
const imageService = {
  async getCropImage(cropName) {
    const key = import.meta.env?.VITE_UNSPLASH_ACCESS_KEY || "";
    if (!key) return 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000';
    const url = `https://api.unsplash.com/search/photos?query=${cropName} crop agriculture&per_page=1&client_id=${key}`;
    try {
      const response = await axios.get(url);
      return response.data.results[0]?.urls?.regular || 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000';
    } catch {
      return 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000';
    }
  }
};

// Explanation Generator Utility
const generateExplanation = (crop, form) => {
  const factors = [];
  if (Number(form.ph) > 6 && Number(form.ph) < 7.5) factors.push("optimal soil pH levels");
  if (Number(form.temperature) > 24) factors.push("ideal temperature resilience");
  if (Number(form.rainfall) > 100) factors.push("sufficient precipitation adaptability");
  
  const baseMsg = factors.length > 0 
    ? `The analysis shows ${factors.join(", ")} which perfectly align with the growth cycle of ${crop}.` 
    : `Based on the provided soil nutrients and current environmental parameters, ${crop} is the most viable choice for maximizing yield potential.`;
    
  return baseMsg;
};

/**
 * MAIN COMPONENT
 */

export default function Predict() {
  const [city, setCity] = useState('');
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [form, setForm] = useState({
    N: '',
    P: '',
    K: '',
    ph: '',
    temperature: '',
    humidity: '',
    rainfall: ''
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch Rainfall via API
  const handleFetchRainfall = async () => {
    if (!city.trim()) return setError('Please enter a location to fetch rainfall data.');
    setWeatherLoading(true);
    setError('');
    try {
      const data = await weatherService.getWeatherData(city);
      setForm(prev => ({
        ...prev,
        rainfall: data.rainfall > 0 ? (data.rainfall * 100).toFixed(2) : '150.00'
      }));
    } catch (err) {
      setError("Location not found. Please check spelling or API key status.");
    } finally {
      setWeatherLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Backend expects 7 features
      const response = await apiInstance.post('/predict', {
        features: [
          Number(form.N),
          Number(form.P),
          Number(form.K),
          Number(form.temperature),
          Number(form.humidity),
          Number(form.ph),
          Number(form.rainfall)
        ]
      });

      // Map recommendations and fetch images
      const rankedCrops = await Promise.all(
        response.data.recommendations.map(async (item) => {
          const imageUrl = await imageService.getCropImage(item.crop);
          return { ...item, imageUrl };
        })
      );
      setResults(rankedCrops);
    } catch (err) {
      // Fallback mock data for preview purposes if backend is unavailable
      const mockRecommendations = [
        { rank: 1, crop: "Wheat", confidence: 94 },
        { rank: 2, crop: "Maize", confidence: 88 },
        { rank: 3, crop: "Cotton", confidence: 76 }
      ];
      const rankedCrops = await Promise.all(
        mockRecommendations.map(async (item) => {
          const imageUrl = await imageService.getCropImage(item.crop);
          return { ...item, imageUrl };
        })
      );
      setResults(rankedCrops);
      if (!results.length) setError("Note: Displaying mock results (Backend not reachable).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 font-sans antialiased text-slate-800">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-brand-green-dark dark:text-white mb-2 tracking-tight">
          Smart Crop Recommendation
        </h1>
        <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Integrated intelligence combining physical sensor data with regional rainfall analysis to deliver prioritized crop choices.
        </p>
      </header>

      {/* Rainfall Section */}
      <div className="bg-white p-8 mb-10 border border-slate-200 rounded-vibe shadow-vibe">
        <h2 className="text-xl font-bold mb-4 text-emerald-700 flex items-center gap-2">
           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
           </svg>
           Regional Rainfall Detection
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-grow w-full">
            <Input 
              label="Fetch Rainfall for Location" 
              placeholder="e.g. Buldhana , yavatmal " 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
            />
          </div>
          <Button 
            onClick={handleFetchRainfall} 
            disabled={weatherLoading} 
            className="mb-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
          >
            {weatherLoading ? 'Updating...' : 'Sync Rainfall Data'}
          </Button>
        </div>
        <p className="text-[10px] text-slate-400 italic">Precipitation data is scaled to seasonal estimates for the ML model.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-10 grid grid-cols-1 md:grid-cols-2 gap-6 border border-slate-200 rounded-vibe shadow-vibe">
        <h2 className="md:col-span-2 text-xl font-bold border-b border-slate-100 pb-4 mb-2 flex items-center gap-2 text-slate-700">
          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          Sensor & Soil Parameters
        </h2>
        
        <Input label="Nitrogen (N)" name="N" type="number" value={form.N} onChange={handleChange} required placeholder="kg/ha" />
        <Input label="Phosphorus (P)" name="P" type="number" value={form.P} onChange={handleChange} required placeholder="kg/ha" />
        <Input label="Potassium (K)" name="K" type="number" value={form.K} onChange={handleChange} required placeholder="kg/ha" />
        <Input label="pH Level" name="ph" type="number" step="0.1" value={form.ph} onChange={handleChange} required placeholder="0-14" />

        <Input label="Sensor Temp (°C)" name="temperature" type="number" step="0.1" value={form.temperature} onChange={handleChange} required />
        <Input label="Sensor Humidity (%)" name="humidity" type="number" step="0.1" value={form.humidity} onChange={handleChange} required />

        <div className="md:col-span-2">
           <Input 
             label="Rainfall (mm) - [Auto-populated]" 
             name="rainfall" 
             value={form.rainfall} 
             readOnly 
             className="bg-emerald-50/50 font-mono text-emerald-700 font-bold border-emerald-100" 
           />
        </div>

        <Button 
          type="submit" 
          className="md:col-span-2 mt-4 py-4 bg-slate-900 hover:bg-black text-white text-lg font-black uppercase tracking-tighter" 
          disabled={loading}
        >
          {loading ? 'Analyzing Data...' : 'Generate Ranked Recommendation'}
        </Button>
      </form>

      {error && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="mt-6 p-4 bg-amber-50 text-amber-800 rounded-vibe border border-amber-200 text-center font-medium text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Results Section */}
      <div className="mt-20 space-y-12">
        <AnimatePresence>
          {results.map((item) => (
            <motion.div 
              key={item.crop} 
              className={`bg-white border border-slate-200 rounded-vibe shadow-vibe overflow-hidden ${item.rank === 1 ? 'ring-2 ring-emerald-400 border-transparent' : ''}`} 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`grid grid-cols-1 ${item.rank === 1 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                <div className="relative overflow-hidden group">
                  <img 
                    src={item.imageUrl} 
                    alt={item.crop} 
                    className="w-full h-72 md:h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Priority Rank #{item.rank}
                  </div>
                </div>
                
                <div className={`p-10 flex flex-col justify-center ${item.rank === 1 ? 'md:col-span-1' : 'md:col-span-2'}`}>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                      {item.crop}
                    </h3>
                    {item.rank === 1 && (
                      <div className=" text-white p-2 ">
                        {/* <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
                          {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /> */}
                        {/* </svg> */}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-emerald-500"></div>
                      <span className="font-bold text-xs uppercase text-slate-400 tracking-widest">Smart Analysis</span>
                    </div>
                    <p className="text-slate-600 italic text-xl leading-relaxed border-l-4 border-emerald-500 pl-6 py-2 bg-slate-50 rounded-r-xl">
                      {generateExplanation(item.crop, form)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
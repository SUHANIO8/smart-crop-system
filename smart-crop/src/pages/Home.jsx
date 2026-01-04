
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="font-sans text-slate-800">
      
      {/* --- HERO SECTION --- matches Screenshot 2025-12-11 132454.jpg */}
      <section className="bg-[#dcfce7] min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background text decoration (faint "Health S" visible in screenshot) */}
        {/* <div className="absolute top-20 right-0 select-none pointer-events-none opacity-[0.03] text-[12rem] font-serif leading-none text-right z-0">
          Health S<br/>PACKAGE
        </div> */}

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1a4d2e] leading-[1.1] mb-6">
              Precision<br />
              Agriculture<br />
              & Soil<br />
              Intelligence
            </h1>
          </div>

          <div className="lg:pl-12">
            <p className="text-[#2f5e4e] text-lg leading-relaxed mb-8 max-w-lg">
              SmartCrop delivers cutting-edge solutions in soil monitoring and agricultural analytics, advancing the capabilities of modern farming through real-time data intelligence. Connect with our community of farmers and experts to optimize your harvest.
            </p>
            <Link to="/register">
              <button className="bg-[#2d8a5b] hover:bg-[#24704a] text-white px-8 py-3 rounded-full font-medium text-lg transition-colors flex items-center gap-2">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* --- FEATURES SECTION --- matches Screenshot 2025-12-11 132528.png */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#143d26] mb-6">
              Comprehensive Soil Monitoring
            </h2>
            <p className="text-slate-600 text-lg">
              Our advanced sensor network captures critical soil parameters in real-time, empowering farmers with actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Moisture */}
            <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-emerald-100/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e2f7e9] rounded-xl flex items-center justify-center text-[#2d8a5b] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0-18h.008v.008H12V3zm-.375 0a.375.375 0 11.75 0 .375.375 0 01-.75 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f3925] mb-3">Moisture Levels</h3>
              <p className="text-slate-600 leading-relaxed">
                Track soil hydration with precision sensors for optimal irrigation management.
              </p>
            </div>

            {/* Feature 2: pH & Nutrients */}
            <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-emerald-100/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e2f7e9] rounded-xl flex items-center justify-center text-[#2d8a5b] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f3925] mb-3">pH & Nutrients</h3>
              <p className="text-slate-600 leading-relaxed">
                Analyze soil chemistry to ensure ideal growing conditions for your crops.
              </p>
            </div>

            {/* Feature 3: Data Analytics */}
            <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-emerald-100/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e2f7e9] rounded-xl flex items-center justify-center text-[#2d8a5b] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f3925] mb-3">Data Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Transform raw sensor data into actionable farming intelligence and trends.
              </p>
            </div>

            {/* Feature 4: AI Predictions */}
            <div className="bg-[#f0fdf4] p-8 rounded-2xl border border-emerald-100/50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e2f7e9] rounded-xl flex items-center justify-center text-[#2d8a5b] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f3925] mb-3">AI Predictions</h3>
              <p className="text-slate-600 leading-relaxed">
                Get crop recommendations based on your soil and weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREDICTION SECTION --- matches Screenshot 2025-12-11 132543.png */}
      <section className="bg-[#dcfce7] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-[#143d26] mb-6">
              Get Crop<br />Predictions
            </h2>
            <p className="text-[#2f5e4e] text-lg leading-relaxed mb-8">
              Use our AI-powered crop prediction service to determine the best crops for your soil and weather conditions. Get yield estimates and actionable recommendations.
            </p>
            <Link to="/predict">
              <button className="bg-[#2d8a5b] hover:bg-[#24704a] text-white px-8 py-3 rounded-full font-medium text-lg transition-colors flex items-center gap-2">
                Try Prediction
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="bg-[#eafdf3] p-10 rounded-[2.5rem] shadow-sm">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2d8a5b] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <span className="text-lg text-[#1a4d2e] font-medium">Soil data analysis</span>
              </div>
              {/* Step 2 */}
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2d8a5b] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <span className="text-lg text-[#1a4d2e] font-medium">Weather integration</span>
              </div>
              {/* Step 3 */}
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2d8a5b] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <span className="text-lg text-[#1a4d2e] font-medium">ML predictions</span>
              </div>
              {/* Step 4 */}
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 rounded-full bg-[#2d8a5b] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <span className="text-lg text-[#1a4d2e] font-medium">Yield optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
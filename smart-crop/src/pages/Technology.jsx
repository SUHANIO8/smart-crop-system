import React from 'react'
import { motion } from 'framer-motion'

const Technology = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Technology
        </motion.h1>
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h2
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Machine Learning Models
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                We use advanced machine learning algorithms including Random Forest, Gradient Boosting,
                and Neural Networks to predict crop yields with high accuracy.
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <li>Historical data analysis</li>
                <li>Weather pattern integration</li>
                <li>Soil composition analysis</li>
                <li>Real-time prediction updates</li>
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h2
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Data Sources
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Our predictions are powered by comprehensive data from multiple sources:
              </motion.p>
              <motion.ul
                className="list-disc list-inside text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <li>Satellite imagery</li>
                <li>Weather APIs</li>
                <li>Soil sensors</li>
                <li>Historical farming data</li>
              </motion.ul>
            </motion.div>
          </div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              Technology Stack
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="bg-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-sm text-gray-600">React + Vite</p>
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <div className="bg-green-100 rounded-lg p-4">
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-sm text-gray-600">Node.js + Express</p>
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                <div className="bg-purple-100 rounded-lg p-4">
                  <h3 className="font-semibold">Database</h3>
                  <p className="text-sm text-gray-600">PostgreSQL</p>
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <div className="bg-orange-100 rounded-lg p-4">
                  <h3 className="font-semibold">ML Framework</h3>
                  <p className="text-sm text-gray-600">Flask + Python</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Technology

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Technology = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#f6fbf7] px-6 py-16 text-[#184d37]"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl font-extrabold text-center mb-6"
        >
          Our Technology
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto text-lg text-[#5f7f73] mb-16"
        >
          SmartCrop combines IoT sensors, cloud computing, and machine learning
          to deliver intelligent, data-driven agricultural decisions.
        </motion.p>

        {/* CORE TECHNOLOGY */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#2d8a5b]">
              Machine Learning Engine
            </h2>
            <p className="text-[#5f7f73] mb-4 leading-relaxed">
              Our ML models analyze soil nutrients, weather patterns, and
              historical yield data to recommend the most suitable crops.
            </p>
            <ul className="list-disc list-inside text-[#5f7f73] space-y-2">
              <li>Random Forest & Gradient Boosting</li>
              <li>Weather-aware predictions</li>
              <li>Soil NPK & pH optimization</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-[#2d8a5b]">
              Data Sources
            </h2>
            <p className="text-[#5f7f73] mb-4 leading-relaxed">
              We integrate multiple real-world data sources to ensure reliable
              and accurate recommendations.
            </p>
            <ul className="list-disc list-inside text-[#5f7f73] space-y-2">
              <li>Soil sensors (NPK, pH, moisture)</li>
              <li>Weather & rainfall APIs</li>
              <li>Historical agricultural datasets</li>
            </ul>
          </motion.div>

        </div>

        {/* TECH STACK */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Frontend", value: "React + Tailwind" },
              { title: "Backend", value: "Node.js / Flask" },
              { title: "ML", value: "Python + Scikit-learn" },
              { title: "Database", value: "Firebase" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-[#eafdf3] rounded-2xl p-6 text-center shadow-sm"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-[#5f7f73] text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Technology;

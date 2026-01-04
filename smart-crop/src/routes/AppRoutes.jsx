// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Technology from "../pages/Technology.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Account from "../pages/Account.jsx";
import Predict from "../pages/Predict.jsx";

const AppRoutes = ({ location }) => {
  const key = location?.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes location={location} key={key}>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route
            path="/predict"
            element={
              <ProtectedRoute>
                <Predict />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default AppRoutes;

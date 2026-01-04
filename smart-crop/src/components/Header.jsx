
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Styling for nav links (returns class string)
  const navClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors hover:text-[#2d8a5b] ${
      isActive ? "text-[#1a4d2e] font-bold" : "text-[#5f7468]"
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            {/* Inline SVG leaf */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#1a4d2e] transition-transform transform group-hover:scale-105"
            >
              <path
                d="M12.0001 21C12.0001 21 8 19 5 15C2 11 3 6 3 6C3 6 8 5 13 8C18 11 19 16 19 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21C12 21 15 14 21 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 21C12 21 11.5 22 10 23"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-2xl font-semibold text-[#1a4d2e] tracking-tight">
              SmartCrop
            </span>
          </Link>

          {/* NAV (center) */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
            <NavLink to="/" className={navClass}>
              HOME
            </NavLink>
            <NavLink to="/about" className={navClass}>
              ABOUT
            </NavLink>
            <NavLink to="/technology" className={navClass}>
              TECHNOLOGY
            </NavLink>

            {/* Only show PREDICT if user is logged in */}
            {user && (
              <>
                <NavLink to="/predict" className={navClass}>
                  PREDICT
                </NavLink>
              </>
            )}
          </nav>

          {/* AUTH Buttons (right) */}
          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <ProfileIcon />
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-[#1a4d2e] hover:text-[#2d8a5b] transition-colors"
                >
                  Log In
                </Link>
                <Link to="/register">
                  <button className="bg-[#2d8a5b] hover:bg-[#24704a] text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1a4d2e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl absolute w-full left-0 top-full z-40">
          <NavLink to="/" className="block text-[#1a4d2e] font-medium" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </NavLink>
          <NavLink to="/about" className="block text-[#1a4d2e] font-medium" onClick={() => setMobileMenuOpen(false)}>
            ABOUT
          </NavLink>
          <NavLink to="/technology" className="block text-[#1a4d2e] font-medium" onClick={() => setMobileMenuOpen(false)}>
            TECHNOLOGY
          </NavLink>

          {user && (
            <>
              <NavLink to="/predict" className="block text-[#2d8a5b] font-bold" onClick={() => setMobileMenuOpen(false)}>
                PREDICT
              </NavLink>
            </>
          )}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-4 mt-2">
            {user ? (
              <>
                <Link to="/account" className="block text-[#1a4d2e]" onClick={() => setMobileMenuOpen(false)}>
                  Account Settings
                </Link>
                <button
                  className="text-left text-red-600 font-medium"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="text-[#1a4d2e] font-medium text-center py-2">
                  Log In
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full bg-[#2d8a5b] text-white py-3 rounded-full font-bold">Sign Up</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS, COLORS, PERSONAL_INFO } from "../constants";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "py-3 shadow-lg backdrop-blur-md bg-opacity-90"
          : "py-6 bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? darkMode
            ? `${COLORS.dark.surface}dd`
            : `${COLORS.light.surface}dd`
          : "transparent",
        width: scrolled ? "90%" : "100%",
        left: scrolled ? "5%" : "0%",
        borderRadius: scrolled ? "1rem" : "0",
        top: scrolled ? "1rem" : "0",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter relative group"
          style={{ color: darkMode ? COLORS.dark.text : COLORS.light.text }}
        >
          {PERSONAL_INFO.name.split(" ")[0]}
          <span
            style={{
              color: darkMode ? COLORS.dark.primary : COLORS.light.primary,
            }}
          >
            .
          </span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
            style={{
              backgroundColor: darkMode
                ? COLORS.dark.primary
                : COLORS.light.primary,
            }}
          ></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors duration-300 hover:text-opacity-80 relative group"
              style={{ color: darkMode ? COLORS.dark.text : COLORS.light.text }}
            >
              {item.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                }}
              ></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 focus:outline-none"
            style={{
              backgroundColor: darkMode
                ? `${COLORS.dark.text}20`
                : `${COLORS.light.text}20`,
              color: darkMode ? COLORS.dark.secondary : COLORS.light.secondary,
            }}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-all duration-300 hover:bg-opacity-20 focus:outline-none"
            style={{
              backgroundColor: darkMode
                ? `${COLORS.dark.text}20`
                : `${COLORS.light.text}20`,
              color: darkMode ? COLORS.dark.secondary : COLORS.light.secondary,
            }}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 focus:outline-none"
            style={{ color: darkMode ? COLORS.dark.text : COLORS.light.text }}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: darkMode
                ? COLORS.dark.surface
                : COLORS.light.surface,
              borderTop: `1px solid ${
                darkMode ? COLORS.dark.border : COLORS.light.border
              }`,
            }}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium transition-colors duration-300"
                  style={{
                    color: darkMode ? COLORS.dark.text : COLORS.light.text,
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

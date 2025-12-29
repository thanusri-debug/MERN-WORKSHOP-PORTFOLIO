import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, COLORS, ANIMATIONS } from "../constants";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

const Hero = ({ darkMode }) => {
  const socialLinks = [
    { icon: FaGithub, href: PERSONAL_INFO.social.github },
    { icon: FaLinkedin, href: PERSONAL_INFO.social.linkedin },
    { icon: FaTwitter, href: PERSONAL_INFO.social.twitter },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundColor: darkMode
          ? COLORS.dark.background
          : COLORS.light.background,
        color: darkMode ? COLORS.dark.text : COLORS.light.text,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-3xl opacity-30"
          style={{
            backgroundColor: darkMode
              ? `${COLORS.dark.primary}20`
              : `${COLORS.light.primary}20`,
          }}
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{
            backgroundColor: darkMode
              ? `${COLORS.dark.secondary}20`
              : `${COLORS.light.secondary}20`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={ANIMATIONS.staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            variants={ANIMATIONS.fadeInUp}
            className="text-lg md:text-xl font-medium mb-4"
            style={{
              color: darkMode ? COLORS.dark.primary : COLORS.light.primary,
            }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={ANIMATIONS.fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          <motion.h2
            variants={ANIMATIONS.fadeInUp}
            className="text-2xl md:text-4xl font-semibold mb-8 opacity-80"
            style={{
              color: darkMode
                ? COLORS.dark.textSecondary
                : COLORS.light.textSecondary,
            }}
          >
            {PERSONAL_INFO.tagline}
          </motion.h2>

          <motion.p
            variants={ANIMATIONS.fadeInUp}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed opacity-90"
          >
            {PERSONAL_INFO.bio.paragraphs[0]}
          </motion.p>

          <motion.div
            variants={ANIMATIONS.fadeInUp}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl transition-colors duration-300"
                style={{
                  color: darkMode ? COLORS.dark.text : COLORS.light.text,
                }}
              >
                <item.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={ANIMATIONS.fadeInUp}>
            <a
              href="#projects"
              className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{
                backgroundColor: darkMode
                  ? COLORS.dark.primary
                  : COLORS.light.primary,
                color: "#ffffff",
              }}
            >
              Check out my work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <FaArrowDown
          size={24}
          style={{
            color: darkMode
              ? COLORS.dark.textSecondary
              : COLORS.light.textSecondary,
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

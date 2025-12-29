import { motion } from "motion/react";
import { PERSONAL_INFO, COLORS, ANIMATIONS } from "../constants";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className="py-20 md:py-32"
      style={{
        backgroundColor: darkMode ? COLORS.dark.surface : COLORS.light.surface,
        color: darkMode ? COLORS.dark.text : COLORS.light.text,
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATIONS.staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={ANIMATIONS.fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              {PERSONAL_INFO.bio.title}
              <span
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                }}
              ></span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={ANIMATIONS.fadeInLeft}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                style={{
                  border: `2px solid ${
                    darkMode ? COLORS.dark.primary : COLORS.light.primary
                  }`,
                  zIndex: 0,
                }}
              ></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-square bg-gray-200">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-6xl bg-linear-to-br from-gray-300 to-gray-400">
                  👋
                </div>
              </div>
            </motion.div>

            <motion.div variants={ANIMATIONS.fadeInRight} className="space-y-6">
              {PERSONAL_INFO.bio.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed opacity-90"
                  style={{
                    color: darkMode
                      ? COLORS.dark.textSecondary
                      : COLORS.light.textSecondary,
                  }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg bg-opacity-50"
                  style={{
                    backgroundColor: darkMode
                      ? COLORS.dark.background
                      : COLORS.light.background,
                  }}
                >
                  <h3
                    className="font-bold text-xl mb-1"
                    style={{
                      color: darkMode
                        ? COLORS.dark.primary
                        : COLORS.light.primary,
                    }}
                  >
                    1+
                  </h3>
                  <p className="text-sm opacity-80">Years Experience</p>
                </div>
                <div
                  className="p-4 rounded-lg bg-opacity-50"
                  style={{
                    backgroundColor: darkMode
                      ? COLORS.dark.background
                      : COLORS.light.background,
                  }}
                >
                  <h3
                    className="font-bold text-xl mb-1"
                    style={{
                      color: darkMode
                        ? COLORS.dark.secondary
                        : COLORS.light.secondary,
                    }}
                  >
                    3+
                  </h3>
                  <p className="text-sm opacity-80">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "motion/react";
import { CONTACT, PERSONAL_INFO, COLORS, ANIMATIONS } from "../constants";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{
        backgroundColor: darkMode
          ? COLORS.dark.background
          : COLORS.light.background,
        color: darkMode ? COLORS.dark.text : COLORS.light.text,
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATIONS.staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={ANIMATIONS.fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              {CONTACT.title}
              <span
                className="absolute -bottom-2 left-0 w-full h-1 rounded-full"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                }}
              ></span>
            </h2>
            <p
              className="text-xl mt-6 max-w-2xl mx-auto"
              style={{
                color: darkMode
                  ? COLORS.dark.textSecondary
                  : COLORS.light.textSecondary,
              }}
            >
              {CONTACT.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={ANIMATIONS.scaleUp}
            className="p-8 md:p-12 rounded-3xl shadow-xl mb-12 relative overflow-hidden"
            style={{
              backgroundColor: darkMode
                ? COLORS.dark.surface
                : COLORS.light.surface,
              border: `1px solid ${
                darkMode ? COLORS.dark.border : COLORS.light.border
              }`,
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"
              style={{
                backgroundColor: darkMode
                  ? COLORS.dark.primary
                  : COLORS.light.primary,
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-64 h-64 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"
              style={{
                backgroundColor: darkMode
                  ? COLORS.dark.secondary
                  : COLORS.light.secondary,
              }}
            />

            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div
                  className="p-4 rounded-full mb-4 bg-opacity-10"
                  style={{
                    backgroundColor: darkMode
                      ? `${COLORS.dark.primary}20`
                      : `${COLORS.light.primary}20`,
                  }}
                >
                  <FaEnvelope
                    size={24}
                    style={{
                      color: darkMode
                        ? COLORS.dark.primary
                        : COLORS.light.primary,
                    }}
                  />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:underline opacity-80"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className="p-4 rounded-full mb-4 bg-opacity-10"
                  style={{
                    backgroundColor: darkMode
                      ? `${COLORS.dark.secondary}20`
                      : `${COLORS.light.secondary}20`,
                  }}
                >
                  <FaPhone
                    size={24}
                    style={{
                      color: darkMode
                        ? COLORS.dark.secondary
                        : COLORS.light.secondary,
                    }}
                  />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="opacity-80">{PERSONAL_INFO.phone}</p>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className="p-4 rounded-full mb-4 bg-opacity-10"
                  style={{
                    backgroundColor: darkMode
                      ? `${COLORS.dark.accent}20`
                      : `${COLORS.light.accent}20`,
                  }}
                >
                  <FaMapMarkerAlt
                    size={24}
                    style={{
                      color: darkMode
                        ? COLORS.dark.accent
                        : COLORS.light.accent,
                    }}
                  />
                </div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="opacity-80">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="mb-8 text-lg opacity-90">{CONTACT.cta}</p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.primary
                    : COLORS.light.primary,
                  color: "#ffffff",
                }}
              >
                Say Hello
              </a>
            </div>
          </motion.div>

          <motion.footer
            variants={ANIMATIONS.fadeInUp}
            className="text-sm opacity-60"
          >
            <p>
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
              reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

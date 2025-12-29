import React from "react";
import { motion } from "motion/react";
import { SKILLS, COLORS, ANIMATIONS } from "../constants";

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
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
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATIONS.staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={ANIMATIONS.fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              {SKILLS.title}
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

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.categories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                variants={ANIMATIONS.fadeInUp}
                className="p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.surface
                    : COLORS.light.surface,
                  border: `1px solid ${
                    darkMode ? COLORS.dark.border : COLORS.light.border
                  }`,
                }}
              >
                <h3
                  className="text-xl font-bold mb-6 pb-2 border-b"
                  style={{
                    color: darkMode
                      ? COLORS.dark.primary
                      : COLORS.light.primary,
                    borderColor: darkMode
                      ? COLORS.dark.border
                      : COLORS.light.border,
                  }}
                >
                  {category.name}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="opacity-70 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{
                          backgroundColor: darkMode
                            ? COLORS.dark.background
                            : COLORS.light.background,
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor:
                              catIndex === 0
                                ? darkMode
                                  ? COLORS.dark.primary
                                  : COLORS.light.primary
                                : catIndex === 1
                                ? darkMode
                                  ? COLORS.dark.secondary
                                  : COLORS.light.secondary
                                : darkMode
                                ? COLORS.dark.accent
                                : COLORS.light.accent,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

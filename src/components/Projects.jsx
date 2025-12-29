import React, { useState } from "react";
import { motion } from "motion/react";
import { PROJECTS, COLORS, ANIMATIONS } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
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
          viewport={{ once: true, amount: 0.1 }}
          variants={ANIMATIONS.staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={ANIMATIONS.fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              {PROJECTS.title}
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

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.items.map((project) => (
              <motion.div
                key={project.id}
                variants={ANIMATIONS.fadeInUp}
                className="group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
                style={{
                  backgroundColor: darkMode
                    ? COLORS.dark.background
                    : COLORS.light.background,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p
                    className="mb-4 line-clamp-3"
                    style={{
                      color: darkMode
                        ? COLORS.dark.textSecondary
                        : COLORS.light.textSecondary,
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: darkMode
                            ? `${COLORS.dark.primary}20`
                            : `${COLORS.light.primary}20`,
                          color: darkMode
                            ? COLORS.dark.primary
                            : COLORS.light.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

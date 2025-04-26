import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const WorkExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Founding Full Stack Software Engineer",
      company: "Pinhous.com",
      location: "Remote",
      period: "June 2024 - Current",
      responsibilities: [
        "Lead the design and development of the Pinhous Real Estate application that services listing agents and general customers",
        "Architected the company OAUTH system for user authentication and authorization",
        "Designed data models and developed UML diagrams for system architecture",
        "Orchestrated and deployed containerized applications and microservices to AWS ECS",
        "Cross-team collaboration with UI/UX, founders and customers to drive MVP and go-to-market strategies",
        "Designed and implemented a robust testing framework with unit and integration tests",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Express",
        "Node.js",
        "MySQL",
        "AWS",
        "Sequelize",
        "Redux Toolkit",
        "REST",
        "Vis.GL",
        "Repliers",
        "AWS Cognito",
        "Google OAuth 2",
        "Astral UML",
        "AWS RDS",
        "Docker",
        "AWS ECS",
        "GitHub Actions",
        "AWS Copilot",
        "Figma",
        "TailwindCSS",
        "Chai",
        "Sinon",
        "Swagger.js",
        "Postman",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div id="works" className="py-16 text-white w-full max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">
                  {exp.title}
                </h3>
                <p className="text-xl text-gray-300">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
            </div>

            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx} className="ml-4">
                  {responsibility}
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-gray-800 text-blue-300 rounded-full hover:shadow-glow transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperienceSection;

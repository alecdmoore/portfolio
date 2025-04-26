// components/sections/EnhancedSkillsSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: string[];
  icon: string; // Unicode icon
  color: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: ["JavaScript", "Python", "HTML", "CSS", "Bash"],
      icon: "⌨️",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Frontend",
      skills: ["React.js", "Redux Toolkit", "TailwindCSS"],
      icon: "🖥️",
      color: "from-purple-500 to-purple-700",
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Socket.io"],
      icon: "⚙️",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Databases",
      skills: [
        "SQL (Postgres, MySQL)",
        "NoSQL (MongoDB)",
        "Redis",
        "Sequelize",
        "Mongoose",
      ],
      icon: "🗄️",
      color: "from-yellow-500 to-yellow-700",
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS (RDS, EC2, S3, ECS, Cognito)", "Git", "Docker", "CI/CD"],
      icon: "☁️",
      color: "from-cyan-500 to-cyan-700",
    },
    {
      name: "Data Science",
      skills: ["NumPy", "Pandas", "PyTorch"],
      icon: "📊",
      color: "from-red-500 to-red-700",
    },
    {
      name: "Design & Tools",
      skills: ["Figma", "Adobe Photoshop", "Chai"],
      icon: "🎨",
      color: "from-pink-500 to-pink-700",
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
    <motion.div variants={fadeInUp} className="py-8">
      <motion.div variants={fadeInUp} className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">
          Technical skills
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className={`bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-${
              category.color.split(" ")[0]
            } transition-all duration-300 overflow-hidden relative`}
          >
            {/* Top gradient bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}
            ></div>

            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-semibold text-gray-200">
                {category.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className={`px-3 py-1 text-sm bg-gray-800/80 text-blue-300 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add custom CSS for the glow effect */}
      <style jsx global>{`
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </motion.div>
  );
};

export default SkillsSection;

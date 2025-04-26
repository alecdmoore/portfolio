import React from "react";
import { motion } from "framer-motion";

const EducationSection = () => {
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

  return (
    <div id="education" className="py-16 text-white w-full max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-500">Education</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="space-y-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Master of Science in Computer Science
                  </h3>
                  <p className="text-xl text-gray-300">
                    Arizona State University
                  </p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">
                  October 2023 - Current
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-xl text-gray-300">
                    San Jose State University
                  </p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">
                  Graduated: December 2021
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationSection;

import { motion } from "framer-motion";

import { skills } from "../data/allData";
skills
const Skills = () => {


  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-gradient-to-b from-[#112240] to-primary text-textPrimary py-20"
    >
      <div className="max-w-7xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-16 text-center"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary px-6">
            Skills & Technologies
          </h2>
          <p className="py-6 text-textSecondary text-lg">
            These are the technologies I've worked with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 shadow-lg rounded-xl backdrop-blur-sm bg-white/5"
              >
                <Icon
                  size={50}
                  className="mx-auto"
                  style={{ color: skill.color }}
                />
                <p className="mt-4">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

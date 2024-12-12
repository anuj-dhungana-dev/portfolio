import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-primary to-[#112240] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-mono text-lg"
          >
            Hi, my name is
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-bold text-textPrimary">
            Anuj Dhungana
          </h1>

          <div className="text-3xl sm:text-5xl font-bold text-textSecondary h-20">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </div>

          <p className="text-textSecondary py-4 max-w-[700px] text-lg">
            I'm a passionate full-stack developer specializing in building
            exceptional digital experiences. Currently, I'm focused on creating
            responsive and user-friendly web applications.
          </p>

          <div className="flex gap-4">
            <Link to="projects" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group text-white px-6 py-3 flex items-center gap-2 rounded-md bg-secondary/20 border-2 border-secondary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                View Work
                <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
              </motion.button>
            </Link>

            <Link to="contact" smooth duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 py-3 rounded-md border-2 border-textSecondary hover:bg-textSecondary/20 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

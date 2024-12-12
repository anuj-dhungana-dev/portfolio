import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../data/allData";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet and small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-primary to-[#112240] text-textPrimary py-20"
    >
      <div className="max-w-7xl mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-16 text-center"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-secondary px-6">
            Featured Projects
          </h2>
          <p className="py-6 text-textSecondary text-lg">
            Check out some of my recent work
          </p>
        </motion.div>

        {/* Slider for Projects */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#112240]/50 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-secondary"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-secondary/10 rounded-full text-secondary border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

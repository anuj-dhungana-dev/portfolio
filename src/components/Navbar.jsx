import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = ["home", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full h-20 bg-primary text-white z-50 shadow-lg"
    >
      <div className="flex justify-between items-center px-4 h-full max-w-7xl mx-auto">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          {/* Logo with hover effect */}
          <img
            src="/Anuj-image.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-3xl border-2 border-transparent group-hover:border-secondary transition-all duration-300"
          />
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex">
          {links.map((link, index) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 cursor-pointer capitalize text-textPrimary hover:text-secondary duration-200 text-2xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
            {links.map((link) => (
              <li
                key={link}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

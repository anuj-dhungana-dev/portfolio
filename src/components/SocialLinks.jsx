import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/adhungana/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/anuj-dhungana-dev",
    },
    // {
    //   id: 3,
    //   child: (
    //     <>
    //       X <FaX size={30} />
    //     </>
    //   ),
    //   href: "https://twitter.com",
    // },
    {
      id: 4,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:anuj.dhungana143@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[70%] left-0 fixed">
      {links.map(({ id, child, href, style }) => (
        <motion.div
          key={id}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, delay: id * 0.1 }}
        >
          <a
            href={href}
            className={`flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-800 ${style}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-between items-center w-full text-secondary">
              {child}
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;

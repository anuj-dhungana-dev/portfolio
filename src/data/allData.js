import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
export const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with real-time inventory management, secure payments, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/ecommerce.jpg",
    github: "https://github.com/AnujDhungana7-21",
  },
  {
    title: "Social Media App",
    description:
      "Feature-rich social platform with real-time messaging, post sharing, and user interactions.",
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    image: "/social_media.png",
    github: "https://github.com/AnujDhungana7-21",
  },
  {
    title: "Task Management",
    description:
      "Collaborative project management tool with real-time updates and team collaboration features.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    image: "/task.png",
    github: "https://github.com/AnujDhungana7-21",
  },
  {
    title: "Weather App",
    description: "A real-time weather forecasting application.",
    tech: ["React", "API", "CSS"],
    image: "/weather.png",
    github: "https://github.com/AnujDhungana7-21",
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blogging platform with authentication and real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/blog.jpg",
    github: "https://github.com/AnujDhungana7-21",
  },
];

export const skills = [
  { name: "React", icon: DiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: DiHtml5, color: "#E34F26" },
  { name: "CSS", icon: DiCss3, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: DiNodejs, color: "#339933" },
  { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
  { name: "MySql", icon: DiMysql, color: "#00758F" },
];

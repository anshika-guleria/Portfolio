// src/data/projectsData.js
import ThinkBoard from "../assets/ThinkBoard.png";
export const projects = [
  {
    title: "ThinkBoard",
    image: ThinkBoard,
    description: "ThinkBoard is a stylish website to keep your ideas organized, with a vibrant and modern design.Learning CRUD opreations ans Designing.",
    technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind","Daisyui"],
    links: {
      github: "https://github.com/anshika-guleria/ThinkBorad",
      vercel: "https://think-borad.vercel.app/"
    }
  },
  {
    title: "Task Manager",
    image: "/task-manager.png",
    description: "Manage your daily tasks efficiently wit",
    technologies: ["React", "Express", "MongoDB"],
    links: {
      github: "https://github.com/your-task-manager"
    }
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description: "My personal portfolio built with React and Tailwind.",
    technologies: ["React", "TailwindCSS", "Vercel"],
    links: {
      github: "https://github.com/your-portfolio",
      vercel: "https://your-portfolio.vercel.app"
    }
  }
];

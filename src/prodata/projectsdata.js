// src/data/projectsData.js
import LifeShare from "../assets/LifeShare.png";
import ThinkBoard from "../assets/ThinkBoard.png";
import WordWaltz from "../assets/WordWaltz.png";
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
    title: "Word Waltz",
    image: WordWaltz,
    description:
      "A high-stakes word guessing game built in React. Every wrong guess wipes a language off the map — lose them all and it's game over. Guess the word to save the world!",
    technologies: ["React", "Tailwind", "Vercel"],
    links: {
      github: "https://github.com/anshika-guleria/Word_waltz_game",
      vercel: "https://word-waltz.vercel.app/",
    },
  },
  {
    title: "LifeShare",
    image: LifeShare,
      mobileImageHeight: "96px",
    description:
      "A full-featured Flutter app streamlining organ and blood donation. Connects donors with recipients in real time, with dedicated donor/recipient dashboards, request tracking, and an admin panel — built as a UG final year project.",
    technologies: ["Flutter", "Dart"],
    links: {
      github: "https://github.com/anshika-guleria/blood_organ_donation_app",
    },
  },
];

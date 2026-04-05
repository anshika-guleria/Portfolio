// src/data/projectsData.js
import LifeShare from "../assets/LifeShare.png";
import PhotoBooth from "../assets/PhotoBooth.png";
import PrepPal from "../assets/PrepPal.png";
import ShelfReview from "../assets/ShelfReview.png";
import ThinkBoard from "../assets/ThinkBoard.png";
import WordWaltz from "../assets/WordWaltz.png";
export const projects = [
   {
    title: "PrepPal",
    image: PrepPal,
      mobileImageHeight: "96px",
    description:
      "",
    technologies: ["React.js", "Node.js", "MongoDB", "Express","Tailwind","Daisyui","Socket.io","webRTC","PeerJS"],
    links: {
      github: "https://github.com/anshika-guleria/PrepPal",
    },
  },
   {
    title: "PhotoBooth",
    image: PhotoBooth,
      mobileImageHeight: "96px",
    description:
      "A fun, themed browser photo booth built with React. Take a 3-photo strip with your webcam, add stickers, apply filters, pick a glitter border, and download the finished strip as a PNG.",
    technologies: ["React", "JavaScript", "CSS"],
    links: {
      github: "https://github.com/anshika-guleria/PhotoBooth",
      vercel: "https://photo-booth-sigma-nine.vercel.app/"
    },
  },
   {
    title: "Shelf Review",
    image: ShelfReview,
      mobileImageHeight: "96px",
    description:
      "Shelf Review is a mobile app for book enthusiasts to share and explore reviews. It provides a simple, interactive, and mobile-friendly interface for discovering books and connecting with readers.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express","CSS","JWT"],
    links: {
      github: "https://github.com/anshika-guleria/Shelf_Review_Frontend",
    },
  },
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

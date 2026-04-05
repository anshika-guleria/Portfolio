// src/data/techIcons.js

import {
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaReact
} from "react-icons/fa";

import {
    SiDaisyui,
    SiDart,
    SiExpress,
    SiFirebase,
    SiFlutter,
    SiJsonwebtokens,
    SiMongodb,
    SiReact,
    SiSocketdotio,
    SiTailwindcss,
    SiWebrtc
} from "react-icons/si";

// Centralized tech icon mapping
export const techIcons = {
  React: <FaReact className="text-sky-500" />,
  "React Native": <SiReact className="text-cyan-400" />,

  "Node.js": <FaNodeJs className="text-green-600" />,
  Express: <SiExpress className="text-gray-800 dark:text-gray-100" />,
  MongoDB: <SiMongodb className="text-green-500" />,

  Tailwind: <SiTailwindcss className="text-sky-400" />,
  Daisyui: <SiDaisyui className="text-fuchsia-400" />,

  JWT: <SiJsonwebtokens className="text-pink-500" />,

  "Socket.io": <SiSocketdotio className="text-black dark:text-white" />,

  // ✅ WebRTC (IMPORTANT: match name exactly in projectsData)
  WebRTC: <SiWebrtc className="text-orange-500" />,

  // ✅ Firebase added
  Firebase: <SiFirebase className="text-yellow-500" />,

  JavaScript: <FaJs className="text-yellow-400" />,
  CSS: <FaCss3Alt className="text-blue-500" />,

  Flutter: <SiFlutter className="text-blue-400" />,
  Dart: <SiDart className="text-blue-600" />,

  // PeerJS fallback
  PeerJS: (
    <span className="text-xs font-semibold text-indigo-500">
      P2P
    </span>
  ),
};

// Safe getter
export const getTechIcon = (tech) => {
  return techIcons[tech] || (
    <span className="text-xs">{tech}</span>
  );
};
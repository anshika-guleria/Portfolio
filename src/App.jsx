import { ArrowUp, Moon, Sparkles, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeContext } from "../src/components/Themecontext";
import About from "./components/About";
import Contacts from "./components/Contacts.jsx";
import Project from "./components/Project";
import Skills from "./components/Skills.jsx";
import { projects } from "./prodata/projectsData.js";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <ThemeContext.Provider value={{ dark }}>
      <div className={`app-container w-full transition-colors duration-500 min-h-screen font-gummy relative ${dark ? "dark-mode" : "light-mode"}`}>

        {/* ===== THEME TOGGLE PILL ===== */}
        <div
          onClick={() => setDark(p => !p)}
          role="button"
          aria-label="Toggle theme"
          className={`
            fixed top-5 right-5 z-50
            flex items-center gap-2 px-4 py-2 rounded-full
            cursor-pointer select-none
            transition-all duration-300 hover:scale-105 active:scale-95
            ${dark
              ? "bg-indigo-950/80 border border-indigo-700/50 backdrop-blur-md text-indigo-200 shadow-lg shadow-indigo-950/50 hover:bg-indigo-900/90"
              : "bg-white/85 border border-blue-200 backdrop-blur-md text-blue-900 shadow-lg shadow-blue-200/40 hover:bg-white"
            }
          `}
        >
          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${dark ? "bg-indigo-800/60 text-amber-300" : "bg-blue-100 text-indigo-500"}`}>
            {dark ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
          </div>
          <span className="text-sm font-semibold tracking-wide pr-1">
            {dark ? "Light mode" : "Dark mode"}
          </span>
        </div>

        {/* ===== BACK TO TOP ===== */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`
            fixed bottom-8 right-6 z-50
            w-11 h-11 rounded-full flex items-center justify-center
            transition-all duration-300 hover:scale-110 active:scale-95
            ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
            ${dark
              ? "bg-indigo-700/80 border border-indigo-500/40 backdrop-blur-md text-white shadow-lg shadow-indigo-900/50 hover:bg-indigo-600"
              : "bg-blue-600 text-white shadow-lg shadow-blue-300/50 hover:bg-blue-700"
            }
          `}
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>

        {/* ===== SECTIONS ===== */}
        <About />
        <Skills />

        {/* ===== PROJECTS ===== */}
        <section className={`projects-section py-16 px-0 overflow-hidden transition-colors duration-500 ${dark ? "starry-bg text-indigo-100" : "bg-gray-50 text-gray-900"}`}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${dark ? "text-indigo-300" : "text-blue-900"}`}>
            {dark ? (
              <span className="flex items-center justify-center gap-3">
                <Sparkles size={22} className="text-indigo-400" />
                My Projects
              </span>
            ) : "My Projects"}
          </h2>

          <div className="relative flex gap-6 overflow-x-auto snap-x snap-mandatory px-[6vw] md:px-[8vw] py-16 md:py-20 no-scrollbar scroll-smooth">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 w-[88vw] md:w-[860px] snap-start ${idx === projects.length - 1 ? "mr-[6vw] md:mr-[8vw]" : ""}`}
              >
                <Project {...project} />
              </div>
            ))}
          </div>
        </section>

        <Contacts />
      </div>
    </ThemeContext.Provider>
  );
}
import { useEffect, useState } from "react";
import dearblue from "../assets/dearblue.gif";
import { useTheme } from "./Themecontext";

// ✅ Generated at module level — outside component, runs once on file load
const STARS = Array.from({ length: 120 }, (_, i) => {
  const rand = Math.random();
  const size = rand > 0.85 ? 3 : rand > 0.55 ? 2 : 1.5;
  return {
    id: i,
    left: `${(Math.random() * 100).toFixed(1)}%`,
    top: `${(Math.random() * 100).toFixed(1)}%`,
    width: `${size}px`,
    height: `${size}px`,
    delay: `${(Math.random() * 6).toFixed(2)}s`,
    dur: `${(1.5 + Math.random() * 4).toFixed(2)}s`,
  };
});

const TITLES = [
  "Full-Stack Developer",
  "React Enthusiast",
  "CS Graduate",
  "Open to Opportunities",
];

function useTypewriter(words, typingSpeed = 85, deletingSpeed = 50, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIdx(i => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function About() {
  const { dark } = useTheme();
  const typeText = useTypewriter(TITLES);

  return (
    <section
      className={`
        about-section min-h-screen
        flex flex-col md:flex-row items-center
        px-5 sm:px-8 md:px-16
        py-16 sm:py-20 md:py-32
        transition-colors duration-500 relative overflow-hidden
        ${dark
          ? "bg-[#020510] text-indigo-100"
          : "bg-gradient-to-r from-blue-200 via-white to-blue-200 text-gray-900"
        }
      `}
    >
      {/* ── Star field (dark mode only) ── */}
      {dark && (
        <div className="star-field absolute inset-0 pointer-events-none" aria-hidden="true">
          {STARS.map(star => (
            <span
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.width,
                height: star.height,
                "--delay": star.delay,
                "--dur": star.dur,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Left text ── */}
      <div className="about-content w-full md:w-1/2 text-left md:pr-16 space-y-4 sm:space-y-5 fade-in-up relative z-10">

        <h1 className={`
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold leading-tight
          ${dark ? "text-indigo-100" : "text-blue-900"}
        `}>
          Hi, I'm{" "}
          <span className={dark ? "text-indigo-400" : "text-indigo-600"}>
            Anshika Guleria
          </span>
        </h1>

        {/* Typewriter */}
        <div className={`
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          font-bold min-h-[1.8rem] sm:min-h-[2rem] md:min-h-[2.5rem]
          ${dark ? "text-indigo-300" : "text-blue-700"}
        `}>
          <span>{typeText}</span>
          <span className="typewriter-cursor">|</span>
        </div>

        <p className={`
          text-base sm:text-lg md:text-xl lg:text-2xl
          leading-relaxed fade-in-up delay-1
          ${dark ? "text-indigo-200" : "text-gray-800"}
        `}>
          A passionate Full-Stack Developer who loves building intuitive and
          user-friendly web applications.
        </p>

        <p className={`
          text-sm sm:text-base md:text-lg lg:text-xl
          leading-relaxed fade-in-up delay-2
          ${dark ? "text-indigo-300" : "text-gray-700"}
        `}>
          I enjoy learning new technologies, experimenting with UI/UX designs,
          and solving real-world problems.
        </p>
      </div>

      <div className="about-image-wrapper w-full md:w-1/2 mt-8 sm:mt-10 md:mt-0 flex justify-center fade-in-up delay-1 relative z-10">
        <img
          src={dearblue}
          alt="Coding Illustration"
          className="w-48 sm:w-64 md:w-[380px] lg:w-[480px] xl:w-[540px]"
        />
      </div>
    </section>
  );
}
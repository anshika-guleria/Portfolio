import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import koi from "../assets/koi.gif";
import { useTheme } from "./Themecontext";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/anshika-guleria-039b01268/",
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    lightStyle: "bg-white/25 hover:bg-white/40 text-white border border-white/20 hover:border-white/50",
    darkStyle:  "bg-sky-500/10 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 hover:border-sky-400/70",
  },
  {
    href: "https://github.com/anshika-guleria",
    icon: <FaGithub size={18} />,
    label: "GitHub",
    lightStyle: "bg-white/25 hover:bg-white/40 text-white border border-white/20 hover:border-white/50",
    darkStyle:  "bg-indigo-500/10 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/70",
  },
  {
    href: "mailto:anshika.guleria.dev@gmail.com",
    icon: <FaEnvelope size={18} />,
    label: "Email",
    lightStyle: "bg-white/25 hover:bg-white/40 text-white border border-white/20 hover:border-white/50",
    darkStyle:  "bg-rose-500/10 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 hover:border-rose-400/70",
  },
  {
    href: "https://drive.google.com/file/d/10ycQRbfIJaMSJXVGdjV1mIB8gK8VvdaV/view?usp=sharing",
    icon: <FaFileAlt size={18} />,
    label: "Resume",
    lightStyle: "bg-white/25 hover:bg-white/40 text-white border border-white/20 hover:border-white/50",
    darkStyle:  "bg-amber-500/10 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 hover:border-amber-400/70",
  },
];

function Contacts() {
  const { dark } = useTheme();

  return (
    <footer
      className={`
        relative w-full overflow-hidden transition-colors duration-500
        ${dark
          ? "bg-[#020510]"
          : "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700"
        }
      `}
    >

      {dark && (
        <>
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full bg-purple-700/10 blur-3xl pointer-events-none" />
        </>
      )}


      {!dark && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-400/10 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/3 blur-3xl pointer-events-none" />
        </>
      )}


      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-32 pt-10 sm:pt-12 pb-8 flex flex-col items-center text-center">


        <div className="w-full max-w-2xl space-y-3 mb-6">


          <div className={`
            inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            text-xs font-bold tracking-widest uppercase
            ${dark
              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
              : "bg-white/20 text-white border border-white/30"
            }
          `}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to internships &amp; entry-level roles
          </div>

          <h2 className={`
            text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight
            ${dark ? "text-indigo-100" : "text-white"}
          `}>
            Let's Connect{" "}
            <span className={dark ? "text-indigo-400" : "text-blue-200"}>✨</span>
          </h2>

          <p className={`
            text-base sm:text-lg leading-relaxed
            ${dark ? "text-indigo-300" : "text-blue-100"}
          `}>
            I'm Anshika — a passionate Full-Stack Developer who loves turning ideas
            into clean, user-friendly web experiences. Always learning, always building.
          </p>
        </div>


        <div className="mb-6">
          <img
            src={koi}
            alt="Koi illustration"
            className="w-32 sm:w-40 md:w-48 object-contain animate-float"
          />
        </div>

        <div className="w-full max-w-xl grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {LINKS.map(({ href, icon, label, lightStyle, darkStyle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`
                flex items-center justify-center gap-2
                px-3 py-2.5
                rounded-2xl text-sm font-semibold
                transition-all duration-200
                hover:scale-105 hover:-translate-y-1
                ${dark ? darkStyle : lightStyle}
              `}
            >
              {icon}
              {label}
            </a>
          ))}
        </div>

        {/* ── Footer bar ── */}
        <div className={`
          w-full border-t pt-6
          flex flex-col sm:flex-row items-center justify-between gap-2
          text-xs
          ${dark
            ? "border-indigo-900/40 text-indigo-600"
            : "border-white/20 text-blue-200"
          }
        `}>
          <span>© {new Date().getFullYear()} Anshika Guleria</span>
          <span>Built with React &amp; Tailwind ✨</span>
        </div>
      </div>
    </footer>
  );
}

export default Contacts;
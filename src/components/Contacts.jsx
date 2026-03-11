import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import koi from "../assets/koi.gif";
import { useTheme } from "./Themecontext";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/anshika-guleria-039b01268/",
    icon: <FaLinkedin size={16} />,
    label: "LinkedIn",
    lightStyle: "bg-white/20 hover:bg-white/30 text-white",
    darkStyle:  "bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-400/60",
  },
  {
    href: "https://github.com/anshika-guleria",
    icon: <FaGithub size={16} />,
    label: "GitHub",
    lightStyle: "bg-white/20 hover:bg-white/30 text-white",
    darkStyle:  "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60",
  },
  {
    href: "mailto:anshika.guleria.dev@gmail.com",
    icon: <FaEnvelope size={16} />,
    label: "Email",
    lightStyle: "bg-white/20 hover:bg-white/30 text-white",
    darkStyle:  "bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:border-rose-400/60",
  },
  {
    href: "https://drive.google.com/file/d/10ycQRbfIJaMSJXVGdjV1mIB8gK8VvdaV/view?usp=sharing",
    icon: <FaFileAlt size={16} />,
    label: "Resume",
    lightStyle: "bg-white/20 hover:bg-white/30 text-white",
    darkStyle:  "bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-400/60",
  },
];

function Contacts() {
  const { dark } = useTheme();

  return (
    <footer className={`relative overflow-hidden w-full transition-colors duration-500 ${
      dark ? "bg-[#020510]" : "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700"
    }`}>

      {/* ── Dark mode: glowing top border + radial spotlight ── */}
      {dark && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
        </>
      )}

      {/* ── Light mode: decorative blobs ── */}
      {!dark && (
        <>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-purple-400/10 blur-2xl pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-12">

          {/* LEFT — Bio */}
          <div className="space-y-5">

            {/* Availability badge — prominent, recruiters will see it */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${
              dark
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                : "bg-white/20 text-white border border-white/30"
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to internships &amp; entry-level roles
            </div>

            <h2 className={`text-4xl md:text-5xl font-extrabold leading-tight ${
              dark ? "text-indigo-100" : "text-white"
            }`}>
              Let's work<br />
              <span className={dark ? "text-indigo-400" : "text-blue-200"}>together 🤝</span>
            </h2>

            <p className={`text-base leading-relaxed max-w-md ${
              dark ? "text-indigo-300" : "text-blue-100"
            }`}>
              I'm Anshika — a passionate Full-Stack Developer who loves turning ideas
              into clean, user-friendly web experiences. Always learning, always building.
            </p>

            {/* Email highlight */}
            <a
              href="mailto:anshika.guleria.dev@gmail.com"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3 ${
                dark ? "text-indigo-400 hover:text-indigo-300" : "text-blue-100 hover:text-white"
              }`}
            >
              <FaEnvelope size={14} />
              anshika.guleria.dev@gmail.com
            </a>
          </div>

          {/* RIGHT — Links + image side by side */}
          <div className="flex flex-col justify-center gap-6">

            <h3 className={`text-sm font-bold uppercase tracking-widest ${
              dark ? "text-indigo-500" : "text-blue-200"
            }`}>
              Find me on
            </h3>

            {/* Buttons + gif on the same row */}
            <div className="flex items-center gap-6">

              {/* Pill buttons in a 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {LINKS.map(({ href, icon, label, lightStyle, darkStyle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      flex items-center justify-center gap-2 px-4 py-2.5 rounded-full
                      text-sm font-semibold
                      transition-all duration-200 hover:scale-105 hover:-translate-y-0.5
                      ${dark ? darkStyle : lightStyle}
                    `}
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>

              {/* Koi gif sits right next to the buttons */}
              <div className="flex-shrink-0">
                <img
                  src={koi}
                  alt="Coding illustration"
                  className="w-28 md:w-36 object-contain animate-float opacity-90"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer bar ── */}
        <div className={`border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs ${
          dark
            ? "border-indigo-900/40 text-indigo-600"
            : "border-white/20 text-blue-200"
        }`}>
          <span>© {new Date().getFullYear()} Anshika Guleria</span>
          <span>Built with React &amp; Tailwind ✨</span>
        </div>
      </div>
    </footer>
  );
}

export default Contacts;
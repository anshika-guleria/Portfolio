import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { useTheme } from "./Themecontext";
import { techIcons } from "./teachIcons";

export default function Project({ title, image, description, technologies, links }) {
  const { dark } = useTheme();

  return (
    <div className={`
      group rounded-3xl shadow-2xl overflow-hidden
      flex flex-col md:flex-row
      border-t-4
      transition-all duration-300
      hover:-translate-y-3
      mx-2 md:mx-4
      ${dark
        ? "bg-white/5 border-indigo-500 hover:bg-white/[0.08] hover:shadow-[0_32px_64px_rgba(99,102,241,0.25)] hover:border-indigo-400"
        : "bg-white border-blue-500 hover:shadow-[0_32px_64px_rgba(59,130,246,0.2)] hover:border-indigo-500"
      }
    `}>

      {/* ── Image ──
          Mobile: shorter fixed height so content fits below
          Desktop: half width, full height of card */}
      <div className="w-full md:w-1/2 h-44 sm:h-52 md:h-auto md:min-h-[420px] flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* ── Content ── */}
      <div className={`
        w-full md:w-1/2 p-5 sm:p-6 md:p-8
        flex flex-col justify-between gap-3
        ${dark ? "text-indigo-100" : "text-gray-900"}
      `}>

        {/* Title + description */}
        <div>
          <h3 className={`
            text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4
            transition-colors duration-300
            ${dark
              ? "text-indigo-100 group-hover:text-indigo-300"
              : "text-blue-900 group-hover:text-indigo-700"
            }
          `}>
            {title}
          </h3>
          <p className={`
            text-sm sm:text-base md:text-lg leading-relaxed
            ${dark ? "text-indigo-300" : "text-gray-700"}
          `}>
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-full
                text-xs sm:text-sm font-medium
                transition-all duration-200 hover:scale-105
                ${dark
                  ? idx % 2 === 0
                    ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20"
                    : "bg-purple-500/15 text-purple-300 border border-purple-500/20"
                  : idx % 2 === 0
                    ? "bg-blue-100 text-blue-800"
                    : "bg-purple-100 text-purple-800"
                }
              `}
            >
              {techIcons[tech] && (
                <span className="text-base sm:text-lg">{techIcons[tech]}</span>
              )}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-1">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className={`
                flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3
                rounded-2xl text-sm sm:text-base font-medium
                transition-all duration-200 hover:scale-[1.05]
                ${dark
                  ? "bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/30"
                  : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-300/40"
                }
              `}
            >
              <FaGithub className="text-base sm:text-lg" /> GitHub
            </a>
          )}
          {links.vercel && (
            <a
              href={links.vercel}
              target="_blank"
              rel="noreferrer"
              className={`
                flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3
                rounded-2xl text-sm sm:text-base font-medium
                transition-all duration-200 hover:scale-[1.05]
                ${dark
                  ? "bg-purple-600 hover:bg-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg hover:shadow-indigo-300/40"
                }
              `}
            >
              <SiVercel className="text-base sm:text-lg" /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
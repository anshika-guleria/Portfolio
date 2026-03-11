import { DiVisualstudio } from "react-icons/di";
import {
  FaDatabase, FaGithub, FaJsSquare, FaNodeJs, FaReact,
} from "react-icons/fa";
import { SiDart, SiFlutter, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useTheme } from "./Themecontext";

export default function Skills() {
  const { dark } = useTheme();

  return (
    <section className={`py-28 px-6 md:px-16 transition-colors duration-500 ${dark ? "bg-gradient-to-b from-[#0b1220] via-[#0f172a] to-[#0b1220]" : "bg-gradient-to-b from-blue-50 via-white to-blue-100"}`}>
      <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-colors duration-500 ${dark ? "text-indigo-300" : "text-blue-900"}`}>
        Skills & Technologies
      </h2>
      <p className={`text-center max-w-2xl mx-auto mb-20 text-lg ${dark ? "text-indigo-400" : "text-blue-700"}`}>
        Technologies I use to build scalable, performant, and user-centric applications.
      </p>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <SkillCard icon={<FaReact />}        name="React"           color="bg-cyan-500"    glow="cyan"    dark={dark} />
        <SkillCard icon={<FaJsSquare />}     name="JavaScript"      color="bg-amber-500"   glow="amber"   dark={dark} />
        <SkillCard icon={<FaNodeJs />}       name="Node.js"         color="bg-emerald-600" glow="emerald" dark={dark} />
        <SkillCard icon={<SiMongodb />}      name="MongoDB"         color="bg-green-600"   glow="green"   dark={dark} />
        <SkillCard icon={<FaDatabase />}     name="SQL & REST APIs" color="bg-indigo-500"  glow="indigo"  dark={dark} />
        <SkillCard icon={<SiFlutter />}      name="Flutter"         color="bg-sky-500"     glow="sky"     dark={dark} />
        <SkillCard icon={<SiDart />}         name="Dart"            color="bg-blue-600"    glow="blue"    dark={dark} />
        <SkillCard icon={<DiVisualstudio />} name="C#"              color="bg-purple-600"  glow="purple"  dark={dark} />
        <SkillCard icon={<FaGithub />}       name="GitHub"          color="bg-gray-800"    glow="gray"    dark={dark} />
        <SkillCard icon={<VscVscode />}      name="VS Code"         color="bg-blue-600"    glow="blue"    dark={dark} />
      </div>
    </section>
  );
}

const glowMap = {
  cyan:    "hover:shadow-cyan-400/30",
  amber:   "hover:shadow-amber-400/30",
  emerald: "hover:shadow-emerald-400/30",
  green:   "hover:shadow-green-400/30",
  indigo:  "hover:shadow-indigo-400/30",
  sky:     "hover:shadow-sky-400/30",
  blue:    "hover:shadow-blue-400/30",
  purple:  "hover:shadow-purple-400/30",
  gray:    "hover:shadow-gray-400/20",
};

function SkillCard({ icon, name, color, glow, dark }) {
  return (
    <div className={`
      group rounded-3xl p-10 text-center
      transition-all duration-300
      hover:-translate-y-3 hover:scale-[1.03]
      cursor-default
      ${dark
        ? `bg-white/5 border border-indigo-900/60 hover:border-indigo-500/50 hover:bg-white/10 hover:shadow-xl ${glowMap[glow]}`
        : `bg-white/80 backdrop-blur-md border border-blue-100 hover:border-blue-300 hover:shadow-2xl ${glowMap[glow]} shadow-lg`
      }
    `}>
      <div className={`
        mx-auto mb-6 w-20 h-20 flex items-center justify-center
        rounded-2xl ${color} shadow-md
        group-hover:scale-110 group-hover:rotate-3
        transition-all duration-300
      `}>
        <div className="text-white text-4xl">{icon}</div>
      </div>

      <h3 className={`
        text-xl font-semibold tracking-wide transition-colors duration-300
        ${dark
          ? "text-indigo-200 group-hover:text-white"
          : "text-blue-900 group-hover:text-indigo-600"
        }
      `}>
        {name}
      </h3>
    </div>
  );
}
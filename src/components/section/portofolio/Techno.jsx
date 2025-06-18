import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export default function Techno() {
  return (
    <section className="px-4 py-12 md:py-20 w-full max-w-6xl mx-auto overflow-x-hidden">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight">
        J’utilise les outils les plus performants pour livrer des sites
        modernes, rapides et sécurisés.
      </h2>

      <div className="space-y-12">
        <h3 className="font-semibold text-lg">FRONTEND</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="flex justify-center items-center gap-2">
            <SiHtml5 size={40} className="text-[#E34F26]" />
            <p>HTML</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiCss3 size={40} className="text-[#663399]" />
            <p>CSS</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiJavascript size={40} className="text-[#F7DF1E]" />
            <p>Javascript</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiReact size={40} className="text-[#61DAFB]" />
            <p>React</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiNextdotjs size={40} />
            <p>Next</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiTailwindcss size={40} className="text-[#06B6D4]" />
            <p> Tailwind CSS</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiSass size={40} className="text-[#CC6699]" />
            <p>SASS</p>
          </div>
        </div>
        <div className="flex justify-between py-6 items-center">
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
            BACKEND
          </h3>
          <div className="flex justify-center items-center gap-2">
            <SiNodedotjs size={40} className="text-[#5FA04E]" />
            <p>Node.js</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiExpress size={40} />
            <p>Express.js</p>
          </div>
        </div>
        <div className="flex justify-between  items-center py-6">
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
            BASE DE DONNÉES
          </h3>
          <div className="flex justify-center items-center gap-2">
            <SiMongodb size={40} className="text-[#47A248]" />
            <p>MangoDB</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <h3 className="font-semibold text-lg mb-4 text-center sm:text-left">
            OUTILS
          </h3>
          <div className="flex justify-center items-center gap-2">
            <SiGit size={40} className="text-[#F05032]" />
            <p>Git</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiGithub size={40} className="text-[#181717]" />
            <p>Github</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <SiPostman size={40} className="text-[#FF6C37]" />
            <p>Postman</p>
          </div>
        </div>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          <SiHtml5 size={40} className="text-[#E34F26]" />
          <SiCss3 size={40} className="text-[#663399]" />
          <SiJavascript size={40} className="text-[#F7DF1E]" />
          <SiReact size={40} className="text-[#61DAFB]" />
          <SiNextdotjs size={40} />
          <SiTailwindcss size={40} className="text-[#06B6D4]" />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={1}>
          <SiSass size={40} className="text-[#CC6699]" />
          <SiNodedotjs size={40} className="text-[#5FA04E]" />
          <SiExpress size={40} />
          <SiMongodb size={40} className="text-[#47A248]" />
          <SiGit size={40} className="text-[#F05032]" />
          <SiPostman size={40} className="text-[#FF6C37]" />
        </OrbitingCircles>
      </div>
    </section>
  );
}

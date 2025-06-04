import { FaDocker, FaGitAlt, FaReact } from "react-icons/fa";
import { LuChartScatter } from "react-icons/lu";
import { MdLoop } from "react-icons/md";
import { PiShareNetwork } from "react-icons/pi";

import {
  SiDjango,
  SiElasticsearch,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiTableau,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import OnScroll from "./OnScroll";
type Skill = {
  name: string;
  icon: React.ReactNode;
  highlight: boolean;
};

const skills: {
  datascience: Skill[];
  frontend: Skill[];
  backend: Skill[];
  other: Skill[];
} = {
  datascience: [
    {
      name: "Machine Learning",
      icon: <LuChartScatter />,
      highlight: true,
    },
    {
      name: "Pandas",
      icon: <SiPandas />,
      highlight: false,
    },
    {
      name: "Numpy",
      icon: <SiNumpy />,
      highlight: false,
    },
    {
      name: "Tableau",
      icon: <SiTableau />,
      highlight: true,
    },
    {
      name: "Deep Learning",
      icon: <PiShareNetwork />,
      highlight: false,
    },
  ],
  frontend: [
    {
      name: "React",
      icon: <FaReact />,
      highlight: true,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      highlight: true,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      highlight: false,
    },
  ],
  backend: [
    {
      name: "Django",
      icon: <SiDjango />,
      highlight: true,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      highlight: false,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      highlight: false,
    },
    {
      name: "Elasticsearch",
      icon: <SiElasticsearch />,
      highlight: false,
    },
  ],
  other: [
    {
      name: "Git",
      icon: <FaGitAlt />,
      highlight: false,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      highlight: false,
    },
    {
      name: "CI/CD",
      icon: <MdLoop />,
      highlight: false,
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      highlight: false,
    },
  ],
};

export default function SkillsSection() {
  return (
    <div className="w-full flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 leading-relaxed">
        Skills & Technologies
      </h2>

      <div className="w-full max-w-6xl grid md:grid-cols-4 gap-12 ">
        {Object.entries(skills).map(([section, list]) => {
          const sectionTitle =
            section === "datascience"
              ? "Data Science"
              : section === "frontend"
              ? "Front-end"
              : section === "backend"
              ? "Backend"
              : "Other";

          return (
            <div key={section} className="p-4 flex flex-col items-center">
              <OnScroll className="flex flex-col items-center animate-fade-in-up">
                <h3 className="text-xl font-bold text-sky-700 mb-4 self-start">
                  {sectionTitle}
                </h3>
                <ul className="space-y-3 flex flex-col ">
                  {list.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex gap-3 text-base items-center"
                    >
                      <span
                        className={
                          skill.highlight
                            ? "text-xl text-sky-500" // solid blue color for highlight icons
                            : "text-xl text-sky-400"
                        }
                      >
                        {skill.icon}
                      </span>
                      {skill.highlight ? (
                        <span className="font-bold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
                          {skill.name}
                        </span>
                      ) : (
                        <span className="text-sky-500">{skill.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </OnScroll>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiApachesolr,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";
import { nextjsIcon } from "../utils/icon";
import { WindowFrame } from "./WindowFrame";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      {
        label: "TypeScript",
        icon: <SiTypescript className="h-6 w-6 text-sky-600" />,
      },
      { label: "React", icon: <FaReact className="h-6 w-6 text-cyan-500" /> },
      {
        label: "Next.js",
        icon: (
          <svg viewBox="0 0 148 90" className="h-6 w-8 text-slate-900">
            <path d={nextjsIcon} fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Backend + Data",
    items: [
      {
        label: "Python",
        icon: <SiPython className="h-6 w-6 text-amber-500" />,
      },
      {
        label: "PostgreSQL",
        icon: <SiPostgresql className="h-6 w-6 text-sky-700" />,
      },
      {
        label: "MongoDB",
        icon: <SiMongodb className="h-6 w-6 text-emerald-600" />,
      },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { label: "Docker", icon: <FaDocker className="h-6 w-6 text-sky-500" /> },
      {
        label: "Apache Solr",
        icon: <SiApachesolr className="h-6 w-6 text-orange-500" />,
      },
    ],
  },
  {
    title: "Also Used",
    items: [
      {
        label: "Ruby on Rails",
        icon: <SiRubyonrails className="h-6 w-6 text-rose-600" />,
      },
    ],
  },
];

const agenticTools = [
  "Claude Code",
  "Codex",
  "Harness",
  "OpenAI Agents",
  "MCP workflows",
  "Prompt engineering",
  "Custom skills",
  "Tool orchestration",
  "Multi-agent handoffs",
  "Eval-driven iteration",
];

export const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32">
      <WindowFrame title="toolbox.exe" bodyClassName="space-y-5">
        <div>
          <p className="retro-kicker mb-2">core stack</p>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Skills
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="retro-inset">
              <h3 className="font-display text-sm leading-6 text-slate-900">
                {group.title}
              </h3>
              <div className="mt-3 grid gap-2">
                {group.items.map((item) => (
                  <div key={item.label} className="retro-skill-item">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="text-sm font-medium text-slate-700">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="retro-inset">
          <p className="retro-kicker">agentic tooling</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Comfortable shipping with modern coding agents and agent workflows,
            including structured tool use, reusable skills, harness-based
            execution, and multi-step automation loops.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {agenticTools.map((tool) => (
              <span key={tool} className="retro-mini-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="retro-inset">
          <p className="retro-kicker">workflow notes</p>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            I tend to enjoy typed frontends, strong data modeling, and products
            where content structure matters as much as visual polish.
          </p>
        </div>
      </WindowFrame>
    </section>
  );
};

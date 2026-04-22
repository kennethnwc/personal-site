import Duration from "duration";
import React from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import { WindowFrame } from "./WindowFrame";

export const Introduction = ({
  title = "Ng Wing Chung",
}: {
  title?: string;
}) => {
  const duration = new Duration(new Date("2019-10-01"), new Date());
  const experienceSummary = [
    duration.year
      ? `${duration.year} year${duration.year > 1 ? "s" : ""}`
      : null,
    duration.month
      ? `${duration.month} month${duration.month > 1 ? "s" : ""}`
      : null,
  ]
    .filter(Boolean)
    .join(" and ");

  const highlights = [
    { label: "Experience", value: experienceSummary || "Since 2019" },
    { label: "Current role", value: "Software Engineer" },
    { label: "Favorite stack", value: "Next.js + TypeScript" },
  ];

  const badges = [
    "full-stack",
    "maps + search",
    "content-heavy UIs",
    "responsive layouts",
    "retro web energy",
  ];

  return (
    <section id="home" className="scroll-mt-32">
      <WindowFrame title="index.html" bodyClassName="space-y-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <p className="retro-kicker">welcome to my corner of the web</p>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-600">
                <Sparkles className="h-3.5 w-3.5" />
                retro personal site
              </div>
              <h1 className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] text-slate-900">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                Software engineer building full-stack products, internal tools,
                repository interfaces, and map-driven experiences. The new
                version of this site borrows the charm of early-2000s Japanese
                personal portals without losing modern responsiveness.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a href="#projects" className="retro-button">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:s1071229@gmail.com"
                className="retro-button retro-button--secondary"
              >
                <Mail className="h-4 w-4" />
                Say Hello
              </a>
              <a
                href="https://github.com/kennethnwc"
                target="_blank"
                rel="noreferrer"
                className="retro-button retro-button--secondary"
              >
                <AiFillGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="retro-inset">
                  <p className="retro-kicker mb-2">{item.label}</p>
                  <p className="text-sm font-semibold leading-6 text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="retro-inset">
              <p className="retro-kicker">now loading</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>
                  Design systems with personality instead of generic SaaS UI
                </li>
                <li>
                  Projects that mix product UX, content, and developer
                  ergonomics
                </li>
                <li>
                  Interfaces that stay playful while still being practical
                </li>
              </ul>
            </div>

            <div className="retro-inset">
              <p className="retro-kicker">web badges</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="retro-stamp">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WindowFrame>
    </section>
  );
};

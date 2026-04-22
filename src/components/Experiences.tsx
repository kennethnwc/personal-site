import { WindowFrame } from "./WindowFrame";

const experiences = [
  {
    years: "2019 - 2021",
    title: "Full Stack Developer",
    description:
      "Built and shipped web interfaces across repository, GIS, and content-heavy products.",
  },
  {
    years: "2022 - Present",
    title: "Software Engineer",
    description:
      "Working across product UI, APIs, and delivery workflows with a bias for maintainable systems.",
  },
];

const interests = [
  "Interfaces with strong information architecture",
  "Developer tooling that reduces friction",
  "Maps, search, and archive experiences",
  "Visual design that feels intentional and memorable",
];

export const Experiences = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <WindowFrame title="history.log" bodyClassName="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="retro-kicker mb-2">career timeline</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Experience
            </h2>
          </div>
          <span className="retro-pill">stable build</span>
        </div>

        <div className="space-y-4">
          {experiences.map((experience) => (
            <article key={experience.years} className="retro-timeline-item">
              <p className="retro-kicker mb-2">{experience.years}</p>
              <h3 className="text-xl font-semibold text-slate-900">
                {experience.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {experience.description}
              </p>
            </article>
          ))}
        </div>

        <div className="retro-inset">
          <p className="retro-kicker">things I enjoy building</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
            {interests.map((interest) => (
              <li key={interest} className="retro-list-item">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </WindowFrame>
    </section>
  );
};

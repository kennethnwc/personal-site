import { Mail } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";

const sections = [
  { id: "home", label: "home.cgi" },
  { id: "experience", label: "history.log" },
  { id: "projects", label: "works.htm" },
  { id: "skills", label: "toolbox.exe" },
];

export const RightSideBar = () => {
  return (
    <header className="sticky top-0 z-50 px-4 pb-2 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="retro-window overflow-hidden">
          <div className="p-4 sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="retro-badge retro-blink">online</span>
                  <p className="retro-kicker m-0">
                    wingchung.net / personal portal / responsive remake
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="mailto:s1071229@gmail.com"
                    className="retro-button retro-button--secondary"
                  >
                    <Mail className="h-4 w-4" />
                    Mail
                  </a>
                  <a
                    href="https://github.com/kennethnwc"
                    target="_blank"
                    rel="noreferrer"
                    className="retro-button"
                  >
                    <AiFillGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <nav className="flex flex-wrap gap-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="retro-navlink"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
                <div className="retro-counter">last update // 2026.04</div>
              </div>
            </div>
          </div>
          <div className="retro-marquee" aria-label="site announcements">
            <div className="retro-marquee__track">
              <span>yokoso!</span>
              <span>portfolio v2</span>
              <span>retro graphics</span>
              <span>responsive layout</span>
              <span>next.js refresh</span>
              <span>typescript inside</span>
              <span>yokoso!</span>
              <span>portfolio v2</span>
              <span>retro graphics</span>
              <span>responsive layout</span>
              <span>next.js refresh</span>
              <span>typescript inside</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

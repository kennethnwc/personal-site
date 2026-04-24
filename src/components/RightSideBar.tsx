import { Mail } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export const RightSideBar = () => {
  return (
    <header className="sticky top-4 z-20">
      <div className="retro-window overflow-hidden">
        <div className="retro-titlebar">
          <span>Portfolio Navigator</span>
          <div className="retro-titlebar-lights" aria-hidden="true">
            <span>_</span>
            <span>□</span>
            <span className="retro-titlebar-close">×</span>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="retro-badge retro-blink">online</span>
                <p className="retro-kicker m-0">c:\users\wing\desktop\portfolio</p>
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
              <div className="retro-counter">last update 04/24/2026</div>
            </div>

            <div className="retro-status-bar lg:grid lg:grid-cols-[1.5fr_0.9fr]">
              <div className="retro-status-field text-sm text-slate-900">
                Open window: <strong>wingchung-portfolio.exe</strong>
              </div>
              <div className="retro-status-field text-sm text-slate-900">
                Theme: <strong>Windows 98</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="retro-marquee" aria-label="site announcements">
          <div className="retro-marquee__track">
            <span>system ready</span>
            <span>portfolio.exe loaded</span>
            <span>hard corners enabled</span>
            <span>classic taskbar online</span>
            <span>next.js under the hood</span>
            <span>typescript inside</span>
            <span>system ready</span>
            <span>portfolio.exe loaded</span>
            <span>hard corners enabled</span>
            <span>classic taskbar online</span>
            <span>next.js under the hood</span>
            <span>typescript inside</span>
          </div>
        </div>
      </div>
    </header>
  );
};

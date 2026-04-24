import { Container } from "../../components/Container";
import { Experiences } from "../../components/Experiences";
import { Introduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";
import { RightSideBar } from "../../components/RightSideBar";
import { Skills } from "../../components/Skills";

export default function Home() {
  const currentTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

  return (
    <div className="min-h-screen pb-4">
      <Container>
        <RightSideBar />
        <Introduction />
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Experiences />
          <Skills />
        </div>
        <Projects />
        <footer className="retro-window p-4 text-sm leading-6 text-slate-900 sm:p-5">
          <p className="retro-kicker mb-2">readme.txt</p>
          <p>
            Personal site rebuilt as a Windows 98 desktop. Hard corners,
            beveled controls, and old-school window chrome on top of a modern
            Next.js app.
          </p>
        </footer>
      </Container>
      <div className="retro-taskbar">
        <div className="retro-taskbar-inner">
          <div className="retro-start-button">Start</div>
          <div className="retro-button retro-task-button">Portfolio.exe</div>
          <div className="retro-button retro-task-button">Projects</div>
          <div className="retro-counter retro-clock">{currentTime}</div>
        </div>
      </div>
    </div>
  );
}

import { Container } from "../../components/Container";
import { Experiences } from "../../components/Experiences";
import { Introduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";
import { RightSideBar } from "../../components/RightSideBar";
import { Skills } from "../../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen pb-8">
      <RightSideBar />
      <Container>
        <Introduction />
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Experiences />
          <Skills />
        </div>
        <Projects />
        <footer className="retro-window p-4 text-sm leading-6 text-slate-700 sm:p-5">
          <p className="retro-kicker mb-2">site footer</p>
          <p>
            Best viewed with curiosity. Styled like an early-2000s personal
            portal, rebuilt to stay readable on phones, tablets, and wide
            screens.
          </p>
        </footer>
      </Container>
    </div>
  );
}

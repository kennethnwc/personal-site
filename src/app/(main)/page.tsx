import { Container } from "../../components/Container";
import { Experiences } from "../../components/Experiences";
import { Introduction } from "../../components/Introduction";
import { Projects } from "../../components/Projects";
import { RightSideBar } from "../../components/RightSideBar";
import { Skills } from "../../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <RightSideBar />
      <Container>
        <Introduction />
        <Experiences />
        <Projects />
        <Skills />
      </Container>
    </div>
  );
}

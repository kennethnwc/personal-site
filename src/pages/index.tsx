import { Container } from "../components/Container";
import { Experiences } from "../components/Experiences";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { RightSideBar } from "../components/RightSideBar";
import { Skills } from "../components/Skills";

const Index = () => (
  <>
    <RightSideBar />
    <Container
      bgGradient="linear-gradient(to left, #ffffff, #81ff5f)"
      bgClip="text"
    >
      <Introduction />
      <Experiences />
      <Projects />
      <Skills />
    </Container>
  </>
);

export default Index;

import { Container } from "../components/Container";
import { Experiences } from "../components/Experiences";
import { Introduction } from "../components/Introduction";
import { Projects } from "../components/Projects";
import { RightSideBar } from "../components/RightSideBar";
import { Skills } from "../components/Skills";

const Index = () => (
  <>
    <RightSideBar />
    <Container color="teal.300">
      <Introduction />
      <Experiences />
      <Projects />
      <Skills />
    </Container>
  </>
);

export default Index;

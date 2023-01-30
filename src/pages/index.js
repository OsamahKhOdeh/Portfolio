import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Skills from "../components/Skills/Skills";
import NavDropDown from "../components/NavDropDown";

const Home = () => {
  return (
    <Layout>
      <NavDropDown>KKK</NavDropDown>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Section>
        <About />
        <Skills />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;

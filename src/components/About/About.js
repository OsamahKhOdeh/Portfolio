import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./AboutStyles";
import { useRouter } from "next/router";
import Skills from "../Skills/Skills";
const About = (props) => {
  const router = new useRouter();
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Get to know me!
          </SectionTitle>
          <SectionText>
            I'm a Software Engineer and Web developer with bachelor degree in information technology , building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. I also like sharing content related to
            the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming I'm open to Job opportunities where I can contribute,
            learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me..
          </SectionText>
          <Button onClick={() => router.push("mailto:eng.osama.odeh@gmail.com")}>Contact</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default About;

import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Boxes, Box, BoxNum, BoxText } from "./SkillsStyles";
import { Chip } from "@mui/material";
import { DiReact, DiAndroid, DiBootstrap, DiNodejs, DiGit, DiJavascript, DiJava, DiMongodb, DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { AiFillAndroid } from "react-icons/ai";
import { MySkills } from "../../constants/constants";
console.log(MySkills[0]);
// <Button onClick={props.handleClick}>Learn More</Button>;

const Reacto = "DiReact";

const Skills = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Skills
        </SectionTitle>
        <SectionText>
          <Boxes>
            {MySkills.map((s, i) => {
              return (
                <Box key={i}>
                  <BoxNum>{MySkills[i].text}</BoxNum>
                  <BoxText>{MySkills[i].icon}</BoxText>
                </Box>
              );
            })}
          </Boxes>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Skills;

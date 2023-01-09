import React from "react";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Boxes, Box, BoxNum, BoxText } from "./SkillsStyles";
import { Chip } from "@mui/material";
import { DiReact, DiAndroid, DiBootstrap, DiNodejs, DiGit, DiJavascript, DiJava, DiMongodb, DiHtml5, DiCss3, DiPython } from "react-icons/di";
import { AiFillAndroid } from "react-icons/ai";
// <Button onClick={props.handleClick}>Learn More</Button>;

const Skills = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Skills
        </SectionTitle>
        <SectionText>
          <Boxes>
            <Box key={1}>
              <BoxNum>React</BoxNum>
              <BoxText>
                <DiReact />
              </BoxText>
            </Box>
            <Box key={1}>
              <BoxNum>Nodejs</BoxNum>
              <BoxText>
                <DiNodejs />
              </BoxText>
            </Box>
            <Box key={1}>
              <BoxNum>Express</BoxNum>
              <BoxText>
                <DiJavascript />
              </BoxText>
            </Box>
            <Box key={1}>
              <BoxNum>MongoDB</BoxNum>
              <BoxText>
                <DiMongodb />
              </BoxText>
            </Box>
            <Box key={1}>
              <BoxNum>JavaScript</BoxNum>
              <BoxText>
                <DiJavascript />
              </BoxText>
            </Box>
            <Box key={1}>
              <BoxNum>React</BoxNum>
              <BoxText>
                <DiReact />
              </BoxText>
            </Box>
          </Boxes>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Skills;

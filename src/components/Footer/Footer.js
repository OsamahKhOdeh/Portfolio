import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:971524199171">971524199171</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:eng.osama.odeh@gmail.com">eng.osama.odeh@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Address</LinkTitle>
          <LinkItem>United Arab Emirates</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/OsamahKhOdeh">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/osama-odeh-34305225a/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/profile.php?id=100083363261870">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

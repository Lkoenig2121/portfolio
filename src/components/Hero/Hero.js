import React from 'react';
         
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
         
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Full-stack Software Developer with experience working with modern web-based technologies.
      </SectionText>
      <a href={"mailto:Lkoenig2121@gmail.com"}><Button>Get in touch!</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;
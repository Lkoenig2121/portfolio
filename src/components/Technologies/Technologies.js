import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Padding, TechnologyList, GridContainer } from './TechnologiesStyles';
         
const Technologies = () =>  (
  <>      
    <Section nopadding id="technologies">
       <SectionTitle main>Technical Skills</SectionTitle>
            <span id="skillsText">
                <ul> {/* We should look into making this a two column list */}
                <GridContainer>
                    <TechnologyList>JavaScript</TechnologyList>
                    <TechnologyList>Typescript</TechnologyList>
                    <TechnologyList>React</TechnologyList>
                    <TechnologyList>GraphQL</TechnologyList>
                    <TechnologyList>Node</TechnologyList>
                    <TechnologyList>Express</TechnologyList>
                    <TechnologyList>HTML5</TechnologyList>
                    <TechnologyList>CSS</TechnologyList>
                    <TechnologyList>SCSS</TechnologyList>
                    <TechnologyList>GIT</TechnologyList>
                    <TechnologyList>REST</TechnologyList>
                    <TechnologyList>Responsive/mobile-first</TechnologyList>
                    <TechnologyList>UI/UX</TechnologyList>
                    <TechnologyList>Data Structures</TechnologyList>
                    <TechnologyList>Algorithms</TechnologyList>
                    <TechnologyList>Communication</TechnologyList>
                    <TechnologyList>Leadership</TechnologyList>
                    <TechnologyList>Problem-Solving</TechnologyList>
                    <TechnologyList>Critical Thinking</TechnologyList>
                    <TechnologyList>Time Management</TechnologyList>
                </GridContainer>
                </ul>
            </span>
            <Padding />
    </Section>
  </>
);

export default Technologies;

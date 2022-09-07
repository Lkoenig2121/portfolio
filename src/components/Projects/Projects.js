import React from 'react';
         
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, main, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
         
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit, href }) => ( /*) These inputs are destructured from project (*/
        <BlogCard key={id}><a href={href} target='_blank'>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <TitleContent>Stack</TitleContent>
          <TagList>
            { tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            )) }
          </TagList>
        </a></BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
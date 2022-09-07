import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
         
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
         
const Header = () =>  (
  <Container>
         
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#aboutMe">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>

      <SocialIcons href="https://github.com/Lkoenig2121" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/lukas-koenig-3b9645217" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>

    </Div3>

  </Container>
);

export default Header;

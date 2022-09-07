import React, { useState, useRef, useEffect } from 'react';
         
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, AboutSection } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle, Padding } from '../../styles/GlobalComponents';
// import picture from './images/KingLukey.PNG'
import { TimeLineData } from '../../constants/constants';
         
const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
         
const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <>
    <Section nopadding id="aboutMe">
      <SectionTitle main>About me!</SectionTitle>
      <div>
        Hello, my name is Lukas Koenig and I am a former student of the University
        of Rutgers for engineering. Ever since my freshman year at college
        I've been building websites for my family, to educate myself,
        and to prove to you that I am a fully confident software engineer!
      </div>
      <img /* src={picture} Cant get the picture to work */ />
      <Padding />
    </Section>
    </>
  );
};

export default Timeline;

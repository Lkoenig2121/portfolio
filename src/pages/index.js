import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import BackgroundAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Header from '../components/Header/Header';
         
const Home = () => {
  return (
    <Layout>
      <Section grid>
      <Hero />
      <BackgroundAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;

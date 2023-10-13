import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import About from './components/about/About';
import Head from 'next/head';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import ParticlesBG from './components/particles/Particles';

function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil Flojfk</title>
      </Head>
      <main>  
          <ParticlesBG/>
          <Banner/>
          <About/>
          <Skill/>
          <Project/>
          <Experience/>
          <Testimonial/>
          <Contact/>
      </main>
    </> 
  )
}

export default Home;

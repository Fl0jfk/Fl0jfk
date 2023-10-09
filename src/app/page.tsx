"use client"

import { DataProvider } from './contexts/data';

import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import About from './components/about/About';
import Head from 'next/head';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';

function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil Flojfk</title>
      </Head>
      <main>
        <DataProvider>
          <Banner/>  
          <About/>
          <Skill/>
          <Project/>
          <Experience/>
          <Testimonial/>
          <Contact/>
        </DataProvider>
      </main>
    </> 
  )
}

export default Home;

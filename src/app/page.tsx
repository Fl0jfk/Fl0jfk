"use client"

import { DataProvider } from './contexts/data';

import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import Head from 'next/head';

function Home() {
  return (
    <>
    <Head>
    <title>Titre de la page</title>
</Head>
<main>
<DataProvider>
  <Banner/>  
  <section id="about"className="p-4 bg-darkGrey">
    About Section
  </section>
  <section id="skills" className="p-4 bg-darkGrey flex flex-col justify-center items-center gap-10">
  <h2 className='text-5xl'>Skills</h2>
   <div className='grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2'>
    <Skill/>
   </div> 
  </section>
  <section id="portfolio" className="p-4 bg-darkGrey flex flex-col justify-center items-center">
    <h2 className='text-5xl'>Portfolio</h2>
    <div className='grid grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1'>
      <Project/>
    </div>
  </section>
  <section className="p-4 bg-lightGrey">
    Experiences
  </section>
  <section className="p-4 bg-darkGrey">
    Testimonials
  </section>
  <section id="contact" className="p-4 bg-lightGrey">
    Contact
  </section>
</DataProvider>
</main>
    </>
    
  )
}

export default Home;

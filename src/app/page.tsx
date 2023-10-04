"use client"

import { DataProvider } from './contexts/data';
import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';

function Home() {
  return (
    <main>
      <DataProvider>
        <Banner/>  
        <section id="about"className="p-4 bg-darkGrey">
          About Section
        </section>
        <section id="skills" className="p-4 bg-darkGrey">
         <Skill/>
        </section>
        <section id="portfolio" className="p-4 bg-darkGrey">
          Portfolio
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
  )
}

export default Home;

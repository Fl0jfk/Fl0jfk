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
        <h2>Skills</h2>
         <div className=' grid grid-cols-4 gap-4'>
          <Skill/>
         </div> 
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

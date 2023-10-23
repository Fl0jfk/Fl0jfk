"use client"

import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import About from './components/about/About';
import Head from 'next/head';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { DataProvider } from "./contexts/data";
import SanFrancisco from 'next/font/local';

const SanFr = SanFrancisco({ src: "./assets/fonts/San Francisco/pro/SF-Pro-Display-Regular.otf"})

function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil Flojfk</title>
      </Head>
      <DataProvider>
        <Header/>
        <main className={SanFr.className}>  
            <Banner/>
            <About/>
            <Skill/>
            <Project/>
            <Experience/>
            <Testimonial/>
            <Contact/>
        </main>
        <Footer/> 
      </DataProvider>  
    </> 
  )
}

export default Home;

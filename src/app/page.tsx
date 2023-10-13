"use client"

import Banner from "./components/banner/Banner";
import Skill from './components/skill/Skill';
import Project from './components/project/Project';
import About from './components/about/About';
import Head from 'next/head';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import ParticlesBG from './components/particles/Particles';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { DataProvider } from './contexts/data';

function Home() {
  return (
    <>
      <Head>
        <title>Page d`&apos;`accueil Flojfk</title>
        <meta name="color-scheme" content="light dark"/>
        <meta name="theme-color" content="#1F1F20" media="(prefers-color-scheme: light)"/>
        <meta name="theme-color" content="#1F1F20" media="(prefers-color-scheme: dark)"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1F1F20"/>
      </Head>
      <DataProvider>
        <Header/>
        <main style={{backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)", background: "linear-gradient(to right, #434343 0%, black 100%)"}}>  
            <ParticlesBG/>
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

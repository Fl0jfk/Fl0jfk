"use client";

import { useData } from "@/app/contexts/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../card/Card";
import FilterButton from "../buttons/FilterButton";

function Project (){
    const data = useData();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filterProjectsByCategory = () => {
        if (selectedCategory === "All") {
            return data.projects;
        } else {
            return data.projects.filter((project) => project.category === selectedCategory);
        }
    };
     if (data) {
            return (
                <section id="portfolio" className="p-4 flex flex-col justify-center items-center z-10">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Portfolio</h2>
                   <FilterButton onChange={(e) => setSelectedCategory(e.target.value)} selectedCategory={selectedCategory}/>
                    <motion.div className='grid grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1'>
                        <AnimatePresence>
                            {filterProjectsByCategory().map((project: {id: number, name: string, img: string, category: string, description: string, github: string, website: string, techs: string }) => (
                                <Card 
                                    key={project.id} 
                                    whatCard="project" 
                                    category={project.category}
                                    mockupSrc={project.category === "Web" ? data.mockups[0].img: data.mockups[1].img}
                                    mockupAlt={project.category === "Web" ? data.mockups[0].name: data.mockups[1].name}
                                    projectImg={project.img}
                                    name={project.name}
                                    projectDesc={project.description}
                                    githubLink={project.github}
                                    siteLink={project.website}
                                    techs={project.techs}
                                    />
                            ))} 
                        </AnimatePresence>
                    </motion.div>
                </section>  
            )
    }
}

export default Project;


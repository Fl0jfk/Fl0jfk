"use client";

import { useData } from "@/app/contexts/data";
import Card from "../card/Card";

function Project (){
    const data = useData()!;
     if (data) {
            return (
                <section id="portfolio" className="p-4 flex flex-col justify-center items-center">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Portfolio</h2>
                    <div className='grid grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1'>
                        {data.projects.map((project: {id: number, name: string, img: string, category: string, description: string, github: string, website: string, techs: string }) => (
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
                    </div>
                </section>  
            )
    }
}

export default Project;


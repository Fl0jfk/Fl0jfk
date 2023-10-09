"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Project (){
    const data = useData();
    const sizeContainerImageWeb ={
        'width' : '220px',
        'height' : '130px'
    }
    const sizeContainerImageMobile ={
        'width' : '90px',
        'height' : '200px'
    }
     if (data) {
        return (
            <section id="portfolio" className="p-4 bg-darkGrey flex flex-col justify-center items-center">
                <h2 className='text-7xl mb-10'>Portfolio</h2>
                <div className='grid grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1'>
                    {data.projects.map((project: {id: number, name: string, img: string, category: string }) => (
                        <div className="bg-lightGrey flex flex-col rounded-lg items-center justify-center wrap gap-4 hover:bg-greenPastel cursor-pointer w-72 h-72 hover:text-darkGrey" key={`Projet n°${project.id}`}>
                            <Image src={project.category === "Web" ? data.mockups[0].img: data.mockups[1].img} alt={project.category === "Web" ? data.mockups[0].name: data.mockups[1].name} width={project.category === "Web" ? "230" :"100"} height={project.category === "Web" ? "230" : "80"} className="z-50" quality={80}/>
                            <div className={project.category === "Web" ? "absolute mb-28" : "absolute mb-10 rounded"} style={project.category === "Web" ? sizeContainerImageWeb : sizeContainerImageMobile}>
                                <Image src={project.img} alt={`Image du site : ${project.name}`} fill={true} style={{objectFit: "fill"}} className={project.category === "Web" ? "" : "rounded-md" } sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={80}/>
                            </div>
                            <h3 className="text-xl hover:text-darkGrey">{project.name}</h3>
                        </div>
                    ))} 
                </div>
            </section>  
        )
    }
}

export default Project;


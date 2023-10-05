"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";


function Project (){
    const { data } = useData();
    if (data) {
        return (
            <>
            {data.projects.map((project: {id: number, name: string, img: string }) => (
               <div className="bg-lightGrey flex flex-col rounded-lg items-center justify-center wrap gap-4 hover:bg-greenPastel cursor-pointer w-72 h-72" key={`Projet n°${project.id}`}>
                    <Image src={data.mockups[0].img} alt={data.mockups[0].name} width="230" height="230" className="bg-[url('/img/hero-pattern.svg')]"/>
                    <div className="absolute mb-20 w-48">
                        <Image src={project.img} alt={`Logo ${project.name}`} width="300" height="300" style={{objectFit: "contain"}}/>
                    </div>
                    <h3>{project.name}</h3>
               </div>
            ))} 
             </>  
        )
    }
}

export default Project;
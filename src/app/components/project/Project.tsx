"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Project (){
    const data = useData();
    const sizeContainerImageWeb ={
        'width' : '220px',
        'height' : '126px'
    }
    const sizeContainerImageMobile ={
        'width' : '90px',
        'height' : '200px'
    }
     if (data) {
        return (
            <>
            {data.projects.map((project: {id: number, name: string, img: string, category: string }) => (
               <div className="bg-lightGrey flex flex-col rounded-lg items-center justify-center wrap gap-4 hover:bg-greenPastel cursor-pointer w-72 h-72" key={`Projet n°${project.id}`}>
                    <Image src={project.category === "Web" ? data.mockups[0].img: data.mockups[1].img} alt={project.category === "Web" ? data.mockups[0].name: data.mockups[1].name} width={project.category === "Web" ? "230" :"100"} height={project.category === "Web" ? "230" : "80"} className="z-50"/>
                    <div className={project.category === "Web" ? "absolute mb-28" : "absolute mb-10 rounded"} style={project.category === "Web" ? sizeContainerImageWeb : sizeContainerImageMobile}>
                        <Image src={project.img} alt={`Image du site : ${project.name}`} fill={true} style={{objectFit: "fill"}} className={project.category === "Web" ? "" : "rounded-md" }/>
                    </div>
                    <h3>{project.name}</h3>
               </div>
            ))} 
             </>  
        )
    }
}

export default Project;
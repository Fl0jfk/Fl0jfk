"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";


function Project (){
    const { data } = useData();
    if (data) {
        return (
            <>
            {data.projects.map((project: {id: number, name: string, img: string }) => (
               <div className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 wrap gap-3 hover:bg-greenPastel cursor-pointer w-52 h-52" key={project.id}>
                    <Image src={project.img} alt={`Logo ${project.name}`} width="70" height="70"/>
                    <h3>{project.name}</h3>
               </div>
            ))} 
             </>  
        )
    }
}

export default Project;
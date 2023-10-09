"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Skill (){
    const data  = useData();
    if (data) {
        return (
            <>
            {data.skills.map((skill: {id: number, name: string, svg: string }) => (
               <div className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 wrap gap-3 hover:bg-greenPastel cursor-pointer w-52 h-52" key={`Skill n°${skill.id}`}>
                    <Image src={skill.svg} alt={`Logo ${skill.name}`} width="70" height="70"/>
                    <h3>{skill.name}</h3>
               </div>
            ))} 
             </>  
        )
    }
}

export default Skill;
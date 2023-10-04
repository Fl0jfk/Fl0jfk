"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Skill (){
    const { data } = useData();
    if (data) {
        return (
            <>
            {data.skills.map((skill: {id: number, name: string, svg: string }) => (
               <div key={skill.id}>
                    <h3>{skill.name}</h3>
                    <Image src={skill.svg} alt={`Logo ${skill.name}`} width="50" height="50"/>
               </div>
            ))} 
             </>  
        )
    }
}

export default Skill;
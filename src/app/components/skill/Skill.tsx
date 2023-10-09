"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Skill (){
    const data  = useData();
    if (data) {
        return (
            <section id="skills" className="p-4 bg-darkGrey flex flex-col justify-center items-center">
                <h2 className='text-7xl mb-10'>Skills</h2>
                <div className='grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2'>
                    {data.skills.map((skill: {id: number, name: string, svg: string }) => (
                        <div className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 wrap gap-5 hover:bg-greenPastel cursor-pointer w-52 h-52 justify-center hover:text-darkGrey" key={`Skill n°${skill.id}`}>
                            <Image src={skill.svg} alt={`Logo ${skill.name}`} width="70" height="70"/>
                            <h3 className="text-xl">{skill.name}</h3>
                        </div>
                    ))} 
                </div>
            </section>  
        )
    }
}

export default Skill;
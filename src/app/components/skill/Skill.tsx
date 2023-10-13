"use client"

import { useData } from "@/app/contexts/data";
import Card from "../card/Card";

function Skill(){
    const data  = useData()!;
    if (data) {
        return (
            <section id="skills" className="p-4 px-12 flex flex-col justify-center items-center z-10 sm:px-8">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Skills</h2>
                    <div className='grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2'>
                        {data.skills.map((skill: {id: number, name: string, svg: string, key: number, level:number }) => (
                            <Card key={skill.id} svg={skill.svg} name={skill.name} level={skill.level} whatCard="skill"/>
                        ))} 
                    </div>
            </section>  
        )
    }
}

export default Skill;




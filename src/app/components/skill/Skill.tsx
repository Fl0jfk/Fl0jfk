"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

const Card = ({key, svg, name} : CardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={() => setIsFlipped((prev) => !prev)}>
            <div  className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 wrap gap-5 hover:bg-greenPastel cursor-pointer w-52 h-52 justify-center hover:text-darkGrey hover:scale-110" key={`Skill n°${key}`}>
                <Image src={svg} alt={`Logo ${name}`} width="70" height="70"/>
                <h3 className="text-xl text-center">{name}</h3>
            </div> 
        </div>
        <div onClick={() => setIsFlipped((prev) => !prev)}>
        <div  className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 wrap gap-5 hover:bg-greenPastel cursor-pointer w-52 h-52 justify-center hover:text-darkGrey hover:scale-110" key={`Skill n°${key}`}>
                <h3> this is the back of the card.</h3>
            </div> 
        </div>
      </ReactCardFlip>
    );
  };

function Skill(){
    const data  = useData();
    if (data) {
        return (
            <section id="skills" className="p-4 bg-darkGrey flex flex-col justify-center items-center">
                <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Skills</h2>
                <div className='grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2'>
                    {data.skills.map((skill: {id: number, name: string, svg: string, key: number }) => (
                        <Card key={skill.id} svg={skill.svg} name={skill.name} />
                    ))} 
                </div>
            </section>  
        )
    }
}

type CardProps = {
    key: number,
    svg: string,
    name: string
}

export default Skill;



"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useState, useEffect } from "react";
import CircleBar from "../circle/CircleBar";


const Card = ({svg, name, level} : CardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    function handleFlip() {
        setIsFlipped(!isFlipped);
        setIsAnimating(!isAnimating)
    }
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div onClick={handleFlip}>
                    <div  className="bg-lightGrey flex flex-col rounded-lg items-center py-14 px-4 gap-5 hover:bg-greenPastel cursor-pointer w-52 h-52 justify-center hover:text-darkGrey">
                        <Image src={svg} alt={`Logo ${name}`} width="70" height="70"/>
                        <h3 className="text-xl text-center">{name}</h3>
                    </div> 
                </div>
                <div onClick={handleFlip}>
                    <div className="bg-greenPastel flex flex-col rounded-lg items-center py-2 px-4 gap-1 justify-center cursor-pointer w-52 h-52 text-darkGrey">
                        <h3 className="text-xl text-center text-darkGrey">{name}</h3>
                        <CircleBar progress={level} isAnimating={isAnimating}/>
                    </div> 
                </div>
            </ReactCardFlip>
        </>
    );
  };

function Skill(){
    const data  = useData();
    if (data) {
        return (
            <section id="skills" className="p-4 bg-darkGrey flex flex-col justify-center items-center">
                <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Skills</h2>
                <div className='grid grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2'>
                    {data.skills.map((skill: {id: number, name: string, svg: string, key: number, level:number }) => (
                        <Card key={skill.id} svg={skill.svg} name={skill.name} level={skill.level}/>
                    ))} 
                </div>
            </section>  
        )
    }
}

type CardProps = {
    key: number,
    svg: string,
    name: string,
    level: number,
}

export default Skill;




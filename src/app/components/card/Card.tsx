"use client"

import CircleBar from "../circle/CircleBar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function Card ({whatCard, svg, name, mockupSrc, category, projectImg, mockupAlt,level , projectDesc, siteLink, githubLink, techs} :CardProps){
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [ whatFace, setWhatFace ] = useState(false);
    function handleFlip() {
        setWhatFace(!whatFace);
        if(!isAnimating){
            setIsFlipped(!isFlipped);
            setIsAnimating(!isAnimating);
        }
    }  
    if(whatCard === "skill") {
        return (
            <motion.div layout animate={{opacity:1, rotateY: isFlipped ? 180 : 360}} transition={{duration: 0.3, animationDirection: "normal"}} initial={false} exit={{opacity:0}} onClick={handleFlip} onAnimationComplete={()=> setIsAnimating(false)} className="relative z-[10]">
                <div className={`flip-card-front flex-col z-[10] rounded-xl items-center py-14 px-4 gap-5 cursor-pointer w-52 h-52 justify-center sm:px2 sm:py4 sm:h-40 sm:w-40 bg-grey ${whatFace ? "hidden" : "flex"}`}>
                    {svg &&<Image src={svg} alt={`Logo ${name}`} width="70" height="70" className="z-1 relative"/>} 
                </div> 
                <div className={`flip-card-back flex-col rounded-xl items-center py-2 px-4 gap-1 justify-center cursor-pointer w-52 h-52 sm:px2 sm:py4 sm:h-40 sm:w-40 bg-grey ${whatFace ? "flex" : "hidden"}`}>
                    <h3 className="text-xl text-center z-1 relative">{name}</h3>
                    {level && <CircleBar level={level} isAnimating={isAnimating}/>}
                </div> 
            </motion.div>
            )
    } else if (whatCard === "project"){
        return (
            <motion.div layout className="flip-card-inner" animate={{opacity:1, rotateY: isFlipped ? 180 : 360}} transition={{duration: 0.3, animationDirection: "normal"}} initial={false} exit={{opacity:0}} onClick={handleFlip} onAnimationComplete={()=> setIsAnimating(false)}>
                <div className={`flip-card-front flex-col rounded-xl p-8 gap-4 cursor-pointer w-full h-[500px] overflow-hidden bg-grey ${whatFace ? "hidden" : "flex"}`}>
                    <h3 className="text-4xl text-white relative">{name}</h3>
                    <div className={category === "Web" ? "absolute top-[170px] left-[30px] w-[850px] h-[850px] rounded-md" : "absolute top-[200px] w-[800px] h-[500px]"}>
                        { projectImg && <Image src={projectImg} alt={`Image du site : ${name}`} width={850} height={850} style={{objectFit: "contain"}}  className="rounded-md"/>}
                    </div> 
                </div>
                <div className={`flip-card-back flex-col rounded-xl items-center py-2 px-4 gap-1 justify-center cursor-pointer w-full h-[500px] ${whatFace ? "flex" : "hidden"}`}>
                    <h3 className="text-2xl text-center">{name}</h3>
                    <p className="text-xl text-center">{projectDesc}</p>
                    <div className="flex items-center gap-4">
                        {githubLink &&  <Link href={githubLink}>
                                <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="black">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        }
                        {siteLink && <Link href={siteLink}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> 
                                    </g>
                                </svg>
                            </Link>
                        }
                    </div>
                    {techs && <p className="text-center text-grey">{`Techs using : ${techs}`}</p>}                 
                </div> 
            </motion.div> 
        )  
    }
}

type CardProps = {
    whatCard?: string,
    svg?: string,
    name?: string,
    mockupSrc?: string,
    mockupAlt?: string,
    category? :string,
    projectImg?: string,
    level?: number,
    projectDesc? :string,
    siteLink?: string,
    githubLink?:string,
    techs?: string
}

export default Card;
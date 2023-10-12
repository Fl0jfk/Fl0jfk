import CircleBar from "../circle/CircleBar";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";


export function FrontCard ({whatCard, svg, name, mockupSrc, category, projectImg, mockupAlt} : FrontCardProps){
    const sizeContainerImageWeb ={
        'width' : '220px',
        'height' : '130px'
    }
    const sizeContainerImageMobile ={
        'width' : '90px',
        'height' : '200px'
    }   
    if(whatCard === "skill") {
        return (
            <div  className="bg-grey bg-opacity-70 flex flex-col rounded-lg items-center py-14 px-4 gap-5 hover:bg-green cursor-pointer w-52 h-52 justify-center hover:text-grey">
                {svg &&<Image src={svg} alt={`Logo ${name}`} width="70" height="70"/>}
                <h3 className="text-xl text-center">{name}</h3>
            </div> 
            )
    } else if (whatCard === "project"){
        return (
            <div className="bg-grey flex flex-col rounded-lg items-center justify-center wrap gap-4 hover:bg-green cursor-pointer w-72 h-72 hover:text-grey">
                { mockupAlt && mockupSrc && <Image src={mockupSrc} alt={mockupAlt} width={category === "Web" ? "230" :"100"} height={category === "Web" ? "230" : "80"} className="z-50"/>}
                <div className={category === "Web" ? "absolute mb-28" : "absolute mb-10 rounded"} style={category === "Web" ? sizeContainerImageWeb : sizeContainerImageMobile}>
                    { projectImg && <Image src={projectImg} alt={`Image du site : ${name}`} fill={true} style={{objectFit: "fill"}} className={category === "Web" ? "" : "rounded-md" } sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>}
                </div>
                <h3 className="text-xl hover:text-grey">{name}</h3>
            </div>
        )  
    }
}

export function BackCard({whatCard, name, level, isAnimating, projectDesc, siteLink, githubLink, techs} : BackCardProps){
    if(whatCard === "skill") {
        return (
            <div className="bg-green flex flex-col rounded-lg items-center py-2 px-4 gap-1 justify-center cursor-pointer w-52 h-52 text-grey">
                <h3 className="text-xl text-center text-grey">{name}</h3>
                { level && <CircleBar level={level} isAnimating={isAnimating}/>}
            </div> 
            )
    } else if (whatCard === "project")
    return (
        <div className="bg-green flex flex-col rounded-lg items-center py-2 px-4 gap-1 justify-center cursor-pointer w-72 h-72 text-grey">
            <h3 className="text-4xl text-center text-grey">{name}</h3>
            <p className="text-2xl text-center text-grey">{projectDesc}</p>
            {githubLink &&  <Link href={githubLink}>
                                <svg width="50px" height="50px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
            {siteLink && <Button link={siteLink} text="Link" full={true}/>}
            {techs && <p className="text-xl text-center text-grey">{`Techs using : ${techs}`}</p>}                 
        </div> 
    )  
}

type FrontCardProps = {
    whatCard: string,
    svg?: string,
    name: string,
    mockupSrc?: string,
    mockupAlt?: string,
    category? :string,
    projectImg?: string,
}

type BackCardProps = {
    whatCard: string,
    name: string,
    level?: number,
    isAnimating: boolean,
    projectDesc? :string,
    siteLink?: string,
    githubLink?:string,
    techs?: string
}
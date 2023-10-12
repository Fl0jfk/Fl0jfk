import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { BackCard, FrontCard } from "../facesCard/FacesCard";

const Card = ({svg, name, level, whatCard, mockupSrc, category, projectDesc, projectImg, mockupAlt, githubLink, siteLink, techs} : CardProps) => {
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
                    <FrontCard svg={svg} name={name} whatCard={whatCard} mockupSrc={mockupSrc} category={category} projectImg={projectImg} mockupAlt={mockupAlt}/>
                </div>
                <div onClick={handleFlip}>
                    <BackCard level={level} name={name} whatCard={whatCard} isAnimating={isAnimating} projectDesc={projectDesc} githubLink={githubLink} siteLink={siteLink} techs={techs}/>
                </div>
            </ReactCardFlip>
        </>
    );
};

  type CardProps = {
    svg?: string,
    name: string,
    level?: number,
    whatCard: string,
    mockupSrc?: string,
    mockupAlt?: string,
    category?: string,
    projectImg?: string,
    projectDesc? :string,
    githubLink? : string,
    siteLink? : string,
    techs?: string
}

export default Card;
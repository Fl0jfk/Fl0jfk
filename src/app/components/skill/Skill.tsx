"use client"

import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Skill (){
    const { data } = useData();
    if (data) {
        return (
            <div>
                {data.skills[0].id}
                {data.skills[0].name}
                <Image src={data.skills[0].svg} alt={`Logo ${data.skills[0].name}`} width="50" height="50"/>
            </div>
        )
    }
}

export default Skill;
"use client"

import Button from "../buttons/Button";
import { useData } from "@/app/contexts/data";
import Image from "next/image";

function Banner() {
  const  data  = useData();
  if (data) {
    return (
        <section className="px-24 pt-4 xl:pt-16 flex justify-center items-end md:px-12 sm:px-8">
          <div className="flex max-w-6xl wrap items-stretch">
            <div className="flex flex-col gap-4 justify-center items-start mb-4 sm:items-center">
              <div className="flex gap-3 items-start sm:items-center">
                <p className="text-4xl md:text-2xl sm:text-xl mt-12 lg:mt-5 md:mt-4 sm:mt-2">I&apos;m</p>
                <h1 className="text-8xl lg:text-6xl md:text-5xl sm:text-4xl text-green">{data.profile.firstname} <br/>{data.profile.lastname}</h1>
              </div>
              <p className="text-4xl md:text-2xl sm:text-xl">{data.profile.profession}</p>
              <Button text="Contact Me" full={false} link="#contact"/>
            </div>
            <div className="flex items-end">
              { data.profile.profilePhoto &&<Image id="bannerImage" src={data.profile.profilePhoto} alt="My profile photo" width={500} height={500} className="rounded-full opacity-80 sm:hidden"/>}
            </div>
          </div>
        </section>
    );
  }
}

export default Banner;
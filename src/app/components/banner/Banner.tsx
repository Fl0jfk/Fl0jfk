"use client"

import LinkButton from "../buttons/LinkButton";
import { useData } from "@/app/contexts/data";
import Image from "next/image";
import { motion } from "framer-motion";

function Banner() {
  const  data  = useData();
  if (data) {
    return (
        <section className="px-24 pt-4 xl:pt-16 flex justify-center items-end md:px-12 sm:px-8 md:mt-[100px] sm:mt-[100px]">
          <div className="flex max-w-6xl wrap items-stretch">
            <div className="flex flex-col gap-4 justify-center items-start mb-4 sm:items-center">
              <div className="flex gap-3 items-start sm:items-center">
                <p className="text-4xl md:text-2xl sm:text-xl mt-12 lg:mt-5 md:mt-4 sm:mt-2">I&apos;m</p>
                <motion.h1 variants={{hidden: { opacity: 0, x: 150 }, visible: { opacity: 1, x: 0 }}}
                            initial="hidden"
                            animate="visible"
                            transition={{duration: 0.8, delay: 0.5}} 
                            className="text-8xl lg:text-6xl md:text-5xl sm:text-4xl text-green">
                              {data.profile.firstname}<br/>
                              {data.profile.lastname}
                </motion.h1>
              </div>
              <p className="text-4xl md:text-2xl sm:text-xl">{data.profile.profession}</p>
              <LinkButton text="Contact Me" full={false} link="#contact"/>
            </div>
            <div className="flex items-end">
              { data.profile.profilePhoto &&<Image id="bannerImage" src={data.profile.profilePhoto} alt="My profile photo" width={500} height={500} className="rounded-full opacity-80 sm:hidden md:hidden z-0"/>}
            </div>
          </div>
        </section>
    );
  }
}

export default Banner;
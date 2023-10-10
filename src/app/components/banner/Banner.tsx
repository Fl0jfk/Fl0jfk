"use client"

import Link from "next/link";
import Button from "../button/Button";
import { useData } from "@/app/contexts/data";
import Social from "../social/Social";
import Image from "next/image";

function Banner() {
  const  data  = useData();
  if (data) {
    return (
        <section className="px-24 pt-4 xl:pt-16 bg-grey flex justify-center items-end md:px-12 sm:px-8">
          <div className="flex max-w-7xl items-stretch">
            <div className="flex flex-col gap-4 justify-center mb-4">
              <div className="flex gap-3 items-start">
                <p className="text-4xl md:text-2xl sm:text-xl mt-12 lg:mt-5 md:mt-4 sm:mt-2">I&apos;m</p>
                <h1 className="text-8xl text-greenPastel lg:text-6xl md:text-5xl sm:text-4xl">{data.profile.firstname} <br/>{data.profile.lastname}</h1>
              </div>
              <p className="text-4xl md:text-2xl sm:text-xl">{data.profile.profession}</p>
              <Link href="#contact">
                  <Button text="Contact Me" full={false} />
              </Link>
            </div>
            <div className="flex items-end z-0">
              <Image src={data.profile.profilePhoto} alt="My profile photo" width={500} height={500} className="z-0"/>
            </div>
            <Social direction='column'/>
          </div>
        </section>
    );
  }
}

export default Banner;
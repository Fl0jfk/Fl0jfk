"use client"

import Link from "next/link";
import Button from "../button/Button";
import { useData } from "@/app/contexts/data";
import Social from "../social/Social";

/*type Data =  {
    profile: {
      firstname: string;
      lastname: string;
      profession: string;
    };
  }*/

function Banner() {
  const { data } = useData();
  if (data) {
    return (
        <section className="px-24 pt-24 pb-4 bg-grey flex justify-between">
          <div className="flex flex-col gap-4 mb-36">
            <div className="flex gap-3 items-end">
              <p className="text-2xl">I&apos;m</p>
              <h1 className="text-4xl text-greenPastel">{data.profile.firstname} {data.profile.lastname}</h1>
            </div>
            <p className="text-xl">{data.profile.profession}</p>
            <Link href="#contact">
                <Button text="Contact Me" full={false} />
            </Link>
          </div>
          <Social direction='column'/>
        </section>
    );
  }
}

export default Banner;


/* 

<div class="test">TEST</div>

.test{
  border:5px ridge grey;
  width:50%;
  height:1rem;
  margin:auto;
  text-align:center;
  position:relative;
}
 
.test:before{
  content:'';
  position:absolute;
  left:calc(-50% - 5px);
  top:calc(50% - 3px);
  border-bottom:5px ridge grey;
  width:50%;
}
 
.test:after{
  content:'';
  position:absolute;
  right:calc(-50% - 5px);
  top:calc(50% - 3px);
  border-bottom:5px ridge grey;
  width:50%;

} */
import { motion } from "framer-motion";
import Image from "next/image";

function About (){
    return (
        <section id="about"className="p-4 flex flex-col items-center justify-center mt-12 sm:mt-0 max-w-[1000px] w-full self-center">
            <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>About</h2>
            <div className="rounded-xl p-16 md:p-8 sm:p-8 text-xl bg-grey flex flex-col gap-10">
                <p className="text-4xl">Hello, I&apos;m Florian, a 30-year-old programming enthusiast, on a journey to become a junior front-end developer.<br/></p>
                <p className="text-xl"> While I lack professional experience, I&apos;m a dedicated learner.</p>
            </div>
        </section>
    )
}

export default About;
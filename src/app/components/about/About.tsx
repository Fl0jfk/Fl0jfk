import { motion } from "framer-motion";

function About (){
    return (
        <section id="about"className="p-4 flex flex-col items-center justify-center mt-12 sm:mt-0">
            <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>About</h2>
            <motion.div 
                className="bg-grey rounded-xl p-16 md:p-8 sm:p-8 text-xl cursor-pointer z-1 relative overflow-hidden"
                variants={{ hover: { scale:1.08, marginTop: "10px", marginBottom: "10px"}}}
                transition={{duration: 1, ease:"backInOut",  delay: 0.5}}
                whileInView="hover">
                    <div className="relative z-[2]">
                    <motion.p
                        variants={{hover: {scale:1}}}
                        initial={{scale:0.9}}
                        transition={{duration: 1, ease:"backInOut", delay: 0.5}}>
                            Hello, I&apos;m <span className="text-green text-2xl">Florian</span>, a 30-year-old programming enthusiast from Rouen, on a journey to become a junior front-end developer.<br/>
                            While I lack professional experience, I&apos;m a dedicated learner.<br/><br/>
                            My passion lies in creating exceptional user experiences, and I&apos;m proficient in HTML, CSS, and JavaScript, always staying updated with the latest technologies and trends.<br/><br/> 
                            Beyond web development, I thrive on technical challenges, problem-solving, and creativity.<br/>
                            I&apos;m determined, passionate, and committed to continuous growth, ready to contribute to exciting projects.<br/>
                            Don&apos;t hesitate to reach out;<br/>
                            I&apos;m eager to be part of the development community and support innovative projects.
                        </motion.p>
                    </div>
                    <Background/>
            </motion.div>
        </section>
    )
}

function Background (){
    return (
        <motion.svg 
            width={"100%"}
            height={"100%"}
            viewBox="0 0 320 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 z-0"
            variants={{hover: {scale:1.5}}}
            transition={{duration: 1, ease:"backInOut",  delay: 0.5}}
        >
            <motion.circle 
                cx={160.5} 
                cy={-110.5} 
                r={201.5} 
                fill="#30374a"
                variants={{hover: {scaleY:0.5, y:-25}}}
                transition={{duration: 1, ease:"backInOut",  delay: 0.5}}
            />
            <motion.ellipse 
                cx={160.5} 
                cy={305.5} 
                rx={201.5} 
                ry={103.5} 
                fill="#30374a"
                variants={{hover: {scaleY:2.25, y:-25}}}
                transition={{duration: 1, ease:"backInOut", delay: 1.5}}
            />
        </motion.svg>
    )
}

export default About;
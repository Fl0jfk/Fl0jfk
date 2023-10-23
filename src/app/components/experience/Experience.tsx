import { useData } from "@/app/contexts/data";

function Experience (){
 const data = useData();
    return (
        <> 
            { data.experiences[0] &&
                <section className="p-4">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Experiences</h2>
                </section>
            }    
        </> 
    )
}

export default Experience;
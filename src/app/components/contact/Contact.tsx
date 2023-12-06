import Link from "next/link";
import dynamic from 'next/dynamic'
import FormContact from "./FormContact";

const DynamicMap = dynamic(() => import("../map/Map"), {
    loading: ()=> <p>Loading...</p>
})

function Contact (){
    return (
        <section id="contact" className="p-4 flex flex-col items-center w-full">
            <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl text-center'>Contact</h2>
            <div className="flex flex-col gap-4 p-8 border-[1px] border-[#6A6A6A] rounded-xl w-full max-w-[1000px]">
                <div className="w-full flex items-center justify-center">
                    <Link href="/CV Florian Hacqueville-Mathi.pdf" className="underline" target="blank">Vous pouvez également télécharger mon CV ici !</Link>
                </div>
                <div className="flex w-full items-center justify-center gap-4">
                    <Link href={"mailto:florian.hacqueville@hotmail.fr?subject=Votre profil m'intéresse!"} aria-label="Link who open your Mail Service and purpose a pre-filled email">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link href={"sms:06.09.56.28.13?body=Salut Florian, ton profil m'intéresse!"} aria-label="Link who open your SMS Service and purpose a pre-filled sms">
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 10H8.01M12 10H12.01M16 10H16.01M4 4H20V16H12L7 21V16H4V4Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/florian-hacqueville-mathi/"} aria-label="Link to my LinkedIn profile" target="blank">
                        <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#fff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className="flex gap-10 sm:flex-col sm:items-center">
                    <FormContact/>
                    <DynamicMap/>
                </div>
            </div>  
        </section>
    )
}

export default Contact;
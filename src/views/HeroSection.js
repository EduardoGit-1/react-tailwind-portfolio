import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import { gitHubURL, linkedInURL } from "../context/constants/socials"
const HeroSection = () =>{

    return(
        <section className="w-full flex items-center justify-center">
            <div className="text-center pt-10 md:pt-36 w-10/12">
                <h2 className="text-5xl py-2 font-medium md:text-6xl">
                    Hi, I'm <span className="text-indigo-500 font-bold">Eduardo</span>
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    Full-Stack Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    I'm a recent master's degree graduate who enjoys Web Development and Machine Learning. Feel free to join me below and send me a message!
                </p>
                <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <div className = "cursor-pointer" onClick={() => window.open(gitHubURL, '_blank')}>
                        <AiFillGithub />
                    </div>
                    <div className = "cursor-pointer" onClick={() => window.open(linkedInURL, '_blank')}>
                        <AiFillLinkedin />
                    </div>
                 
                    {/* <AiFillYoutube /> */}
                </div>
            </div>
      </section>
    )
}

export default HeroSection
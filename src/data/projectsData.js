import dl_Logo from '../assets/DL_logo.png';
import ebayScrapperLogo from '../assets/ebayScrapperLogo.png'
import weatherAppLogo from "../assets/weatherAppLogo.png"
import amazonScrapperLogo from "../assets/amazonScrapperLogo.png"

import {FaPython, FaReact} from "react-icons/fa"
import {SiTensorflow} from "react-icons/si"
import {DiCss3} from "react-icons/di"
import {TbSoup} from "react-icons/tb"

const size = "16px"
const projectsData = [
    {
        title : "DL-based algorithm for violence detection in audio data",
        gitURL: "https://github.com/EduardoGit-1/DL-based-algorithm-for-violence-detection-in-audio-data",
        websiteURL : null,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros nisl, tempor sit amet suscipit vel, fringilla ac mauris. Praesent at augue non leo bibendum viverra. Nunc ac orci vel lectus mollis sodales ac ut nunc. Vivamus id feugiat nunc. Nunc scelerisque nec tellus at auctor. Sed dignissim purus neque.",
        img :dl_Logo,
        languages:[
            {
                icon: <FaPython className={`w-[${size}] h-[${size}] text-green-400`}/>,
                color: "text-green-400",
                description: "Python",

            },
            {
                icon: <SiTensorflow className={`w-[${size}] h-[${size}] text-orange-400`}/>,
                color: "text-orange-400",
                description: "Tensorflow",

            },
        ]
    },
    {
        title : "Ebay Scrapper",
        gitURL: "https://github.com/EduardoGit-1/DL-based-algorithm-for-violence-detection-in-audio-data",
        websiteURL : null,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros nisl, tempor sit amet suscipit vel, fringilla ac mauris. Praesent at augue non leo bibendum viverra. Nunc ac orci vel lectus mollis sodales ac ut nunc. Vivamus id feugiat nunc. Nunc scelerisque nec tellus at auctor. Sed dignissim purus neque.",
        img :ebayScrapperLogo,
        languages:[
            {
                icon: <FaPython className={`w-[${size}] h-[${size}] text-green-400`}/>,
                color: "text-green-400",
                description: "Python",

            },
            {
                icon: <TbSoup className={`w-[${size}] h-[${size}] text-amber-500`}/>,
                color: "text-amber-500",
                description: "BS4",

            },
            
        ]
    },
    {
        title : "Weather App",
        gitURL: "https://github.com/EduardoGit-1/DL-based-algorithm-for-violence-detection-in-audio-data",
        websiteURL : "https://google.com",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros nisl, tempor sit amet suscipit vel, fringilla ac mauris. Praesent at augue non leo bibendum viverra. Nunc ac orci vel lectus mollis sodales ac ut nunc. Vivamus id feugiat nunc. Nunc scelerisque nec tellus at auctor. Sed dignissim purus neque.",
        img :weatherAppLogo,
        languages:[
            {
                icon: <FaReact className={`w-[${size}] h-[${size}] text-red-500`}/>,
                color: "text-red-500",
                description: "React",

            },
            {
                icon: <DiCss3 className={`w-[${size}] h-[${size}] text-blue-400`}/>,
                color: "text-blue-400",
                description: "CSS",

            },
            
        ]
    },
    {
        title : "Amazon Scrapper",
        gitURL: "https://github.com/EduardoGit-1/DL-based-algorithm-for-violence-detection-in-audio-data",
        websiteURL : null,
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros nisl, tempor sit amet suscipit vel, fringilla ac mauris. Praesent at augue non leo bibendum viverra. Nunc ac orci vel lectus mollis sodales ac ut nunc. Vivamus id feugiat nunc. Nunc scelerisque nec tellus at auctor. Sed dignissim purus neque.",
        img :amazonScrapperLogo,
        languages:[
            {
                icon: <FaPython className={`w-[${size}] h-[${size}] text-green-400`}/>,
                color: "text-green-400",
                description: "Python",

            },
            {
                icon: <TbSoup className={`w-[${size}] h-[${size}] text-amber-500`}/>,
                color: "text-amber-500",
                description: "BS4",

            },
            
        ]
    },


]

export default projectsData
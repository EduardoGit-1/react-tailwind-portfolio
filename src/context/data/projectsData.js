import dl_Logo from '../../assets/DL_logo.png';
import ebayScrapperLogo from '../../assets/ebayScrapperLogo.png'
import weatherAppLogo from "../../assets/weatherAppLogo.png"
import amazonScrapperLogo from "../../assets/amazonScrapperLogo.png"

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
        description : "This project was the main objective of my Master's dissertation. It was mainly a comparative study regarding Deep Learning architectures and how well these perform under a specific use case: in-car violence detection only using auditory data and its visual representations.",
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
        gitURL: "https://github.com/EduardoGit-1/ebay_scrapper",
        websiteURL : null,
        description : "The Ebay Scrapper project allows the user to input all the available ebay search parameters and outputs a CSV file with the desired products which are ordered by their price. This project was my introduction to Web Scrapping and it definitely allowed me to evolve my Python skills.",
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
        gitURL: "https://github.com/EduardoGit-1/weather-app",
        websiteURL : "https://eduardogit-1.github.io/weather-app/",
        description : "Just your classic Weather Application. This side project was developed in order to refresh my memory in form handling and React hooks implementation. Furthermore, the OpenWeather API was used in order to get the needed weather information all arround the world. Feel free to checkout its deployed version.",
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
        gitURL: "https://github.com/EduardoGit-1/amazon-eu-scrapper",
        websiteURL : null,
        description : "The Amazon Scrapper was the follow-up scrapping project that I did. As in the Ebay Scrapper script, it also allows to fully custumize all the parameters, searching the deseried products in all European Amazon Websites. It also uses fuzzy word matching in order to filter unwanted items.",
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
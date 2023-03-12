import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"
import { linkedInURL } from './socials'

const size = "50px"

const contactInfo = [
    {
        icon: <AiFillLinkedin className={`w-8 h-8  md:w-[${size}] md:h-[${size}] text-blue-500`}/>,
        title: "LinkedIn",
        description: "linkedin/eduardo-gomes",
        onClick: "handleOpenPageOnClick",
        value : linkedInURL,
        copyButton : false
        
    },
    {
        icon: <HiOutlineMail className={`w-8 h-8 md:w-[${size}] md:h-[${size}] text-orange-500`}/>,
        title: "Email",
        description: "eduardogomesdwork@gmail.com",
        onClick : "handleContactInfoOnClick",
        value : "eduardogomesdwork@gmail.com",
        copyButton : true
    },
    {
        icon: <FaDiscord className={`w-8 h-8  md:w-[${size}] md:h-[${size}] text-gray-500`}/>,
        title: "Discord",
        description: "@eduardo",
        onClick: "handleContactInfoOnClick",
        value: "Eduardo#3495",
        copyButton : true
    },
]

export default contactInfo
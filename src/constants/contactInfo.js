import {HiOutlineMail} from 'react-icons/hi'
import {AiFillLinkedin} from "react-icons/ai"
import {FaDiscord} from "react-icons/fa"

const size = "50px"
const smallerSize = "px"
export default [
    {
        icon: <HiOutlineMail className={`w-8 h-8 md:w-[${size}] md:h-[${size}] text-orange-500`}/>,
        title: "Email",
        description: "eduardogomesdwork@gmail.com"
    },
    {
        icon: <AiFillLinkedin className={`w-8 h-8  md:w-[${size}] md:h-[${size}] text-blue-500`}/>,
        title: "LinkedIn",
        description: "linkedin/eduardo-gomes"
    },
    {
        icon: <FaDiscord className={`w-8 h-8  md:w-[${size}] md:h-[${size}] text-gray-500`}/>,
        title: "Discord",
        description: "@eduardo"
    },
]
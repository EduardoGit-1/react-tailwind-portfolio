import {AiOutlineHistory, AiFillMessage, AiFillGithub} from 'react-icons/ai'
import {BiHomeAlt2} from 'react-icons/bi'
const size = 50
const navLinks = [
    {
        id : "home",
        title : "Home",
        offset : 0,
        mobileOffset: 0,
        icon: <BiHomeAlt2 className="z-10" size = {size}/>
    },
    {
        id : "about",
        title : "About",
        offset : 0,
        mobileOffset: 40,
        icon: <AiOutlineHistory className="z-10" size = {size}/>
    },
    {
        id : "projects",
        title : "Projects",
        offset : 0,
        mobileOffset: 40,
        icon: <AiFillGithub className="z-10" size = {size}/>
    },
    {
        id : "contact",
        title : "Contact",
        offset : -80,
        mobileOffset: 0,
        icon: <AiFillMessage className="z-10" size = {size}/>
    }
]

export default navLinks
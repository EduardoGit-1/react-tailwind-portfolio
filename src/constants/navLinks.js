import {AiOutlineHistory, AiFillMessage, AiFillGithub} from 'react-icons/ai'
import {BiHomeAlt2} from 'react-icons/bi'
const size = 50
export default [
    {
        id : "home",
        title : "Home",
        icon: <BiHomeAlt2 size = {size}/>
    },
    {
        id : "about",
        title : "About",
        icon: <AiOutlineHistory size = {size}/>
    },
    {
        id : "projects",
        title : "Projects",
        icon: <AiFillGithub size = {size}/>
    },
    {
        id : "contact",
        title : "Contact",
        icon: <AiFillMessage size = {size}/>
    }
]
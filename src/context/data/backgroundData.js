
import { FaCode, FaDatabase} from 'react-icons/fa';
import {IoMdGitNetwork} from 'react-icons/io'

const backgroundData = [
    {
        id : 1,
        title : "Web Development",
        icon :<FaCode size = {30}/>,
        description: "In 2017 I had my first experience with Web Development. For me, it's clearly the most enjoyable tech area since it allows to express creativity through the design of visually and functionally appealing websites. It is also a constantly evolving field, with new tools, techniques and technologies emerging all the time which allows for an enjoyable and tangible way of learning since it's easy to see your results."
    },
    {
        id : 2,
        title : "Machine Learning",
        icon : <IoMdGitNetwork size = {30}/>,
        description: "Machine Learning is a cutting-edge field that has the potential to be applied in a wide range of industries which is why it makes it so interesting. During my academic and professional experience I developed multiple Machine Learning models with different use cases which allowed me to understand the vast scope that this piece of technology has, and how impactfull can it be at a economic and social level."
    },
    {
        id : 3,
        title : "Infrastructure",
        icon : <FaDatabase size = {30}/>,
        description: "A little knowledge about Infrastructure was an unavoidable outcome of my Bachelors and Masters Degree. During my academic years I also learned how to implement back end applications as well as create relational and non-relational databases which in turn had to be connected and later deployed. This allowed me to understand the backbone of technology services and its underlying importance."
    }
]

export default backgroundData
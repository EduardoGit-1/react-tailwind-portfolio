
import eumLogo from '../../assets/EEUMLOGO.png'
import boschLogo from '../../assets/Logo-Bosch.png'
import izLogo from '../../assets/impactzeroLogo.png'

const timelineData = [
    {
        title : "Bachelor's Degree",
        subTitle: "University of Minho - Engineering and Management of Information Systems",
        timeInterval : "Sep 2017 - Jun 2020",
        img :eumLogo,
        list : [
            "Development of OOP-oriented applications",
            "Web applications development following direct company requirements",
            "Introduction to Infrastructure, Machine Learning and Networking"
        ],
        description: ""
    },
    {
        title : "Master's Degree",
        subTitle: "University of Minho - Engineering and Management of Information Systems",
        timeInterval : "Sep 2020 - Oct 2022",
        img : eumLogo,
        list : [
            "Machine Learning oriented for time-series forecasting",
            "Management and Implementation of Information Systems",
            "Strongly focused on full-scale Web Dev",
            "Dissertation"
        ],
       
    },
    {
        title : "Machine Learning Engineer",
        subTitle: "Bosch Car Multimedia",
        timeInterval: "Mar 2022 - Nov 2022",
        img : boschLogo,
        list : [
            "First professional experience",
            "Worked with the Agile SCRUM methodology",
            "Development, implementation and comparative study of Deep Learning architectures for in-car violence detection using auditory data",
        ],
    },
    {
        title : "Backend and Mobile Developer",
        subTitle: "Impactzero Software",
        timeInterval: "May 2024 - Present",
        img : izLogo,
        list : [
            "Designed and implemented a document parsing pipeline to extract and transmit data securely to multiple destinations, including legacy banking systems",
            "Ensured compliance with banking standards by implementing secure and efficient data handling processes",
            "Developed and maintained two Flutter-based mobile applications for restaurants and clients, ensuring a seamless user experience",
            "Designed and implemented features for restaurant owners to manage menus, categories, custom dishes, and respective subscriptions",
            "Optimized both apps' performance and user experience by collaborating with designers and backend teams"
        ],
    }
]

export default timelineData
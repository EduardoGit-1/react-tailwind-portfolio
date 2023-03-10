import {BiWorld} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'

const ProjectCard = ({title, gitURL,websiteURL, description, languages, img}) => {

    return (
        <div className='group bg-slate-800 rounded-xl shadow-lg p-5 flex flex-col justify-between'>
            <div className='flex items-center justify-center flex-col'>
                    <div className='overflow-hidden rounded-lg relative flex items-center justify-center '>
                        <img className = "rounded-lg object-scale-down w-full h-full group-hover:blur-sm" src = {img} alt=""/>    
                        <div className='absolute flex flex-row w-full h-full justify-around align-middle -bottom-[100%] group-hover:-translate-y-[63%] transition ease-in-out'>
                            <div onClick={() => window.open(gitURL, '_blank')}>
                                <AiFillGithub className ={`w-24 h-24 text-indigo-500 cursor-pointer hover:text-cyan-900 ${websiteURL?'hover:w-[700px] md:hover:w-[500px] hover:translate-x-12 transition-all ease-in-out': ''}`} />
                            </div>
                            {
                                websiteURL && (<div onClick={() => window.open(websiteURL, '_blank')}><BiWorld className ={`w-24 h-24 text-indigo-500 cursor-pointer hover:text-cyan-900 hover:w-[700px] md:hover:w-[500px] hover:-translate-x-12 transition-all ease-in-out`}/> </div>)
                            }
                        </div>
                    </div>
                <div className='flex flex-col py-4'>
                    <h1 className='text-xl font-semibold mb-3'>{title}</h1>
                    <p className='text-gray-300'>{description}</p>
                </div>
            </div>
            <div>
                <div className='flex flex-row self-start gap-x-5 pt-4'>
                    {
                        languages.map((language) =>(
                            <div className='flex flex-row items-center justify-center space-x-1'>
                                {language.icon}
                                <p className={`${language.color}`}>{language.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
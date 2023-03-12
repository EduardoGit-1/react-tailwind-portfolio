import projectsData from "../context/data/projectsData"
import ProjectCard from "../components/ProjectCard"
const Projects = () => {
  return (
    <section id ="projects" className='w-full flex flex-col items-center justify-center'>
        <div className='my-10 md:flex flex-col space-y-20 md:my-20 w-10/12'>
            <div className='pt-5 '>
                <div className=''>
                    <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider opacity-50">Recent personal projects</p>
                    <h1 className='text-4xl text-indigo-500 font-bold md:text-5xl'>Projects.</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-14 text-white align-center'>
                {projectsData.map(project =>(
                    <ProjectCard 
                       {...project}
                        />
                    ))
                }
            </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
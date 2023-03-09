import React from 'react'
import AboutCard from '../components/AboutCard'
import services from '../data/services'
import Timeline from '../components/Timeline'

const About = () => {
  return (
    <section id ="about" className='w-full flex flex-col items-center justify-center'>
        <div className='my-10 md:flex flex-col space-y-20 md:my-20 w-10/12'>
            <div className='pt-5 '>
                <div className=''>
                    <p className="sm:text-[16px] text-[14px] text-secondary uppercase tracking-wider opacity-50"> Regarding my background </p>
                    <h1 className='text-4xl text-indigo-500 font-bold md:text-5xl'>About.</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 text-white'>
                {services.map(service =>(
                    <AboutCard 
                        key = {service.id} 
                        title = {service.title}
                        description = {service.description}
                        icon = {service.icon}
                        />
                    ))
                }
            </div>
        </div>
        <div className='w-full'>
            <Timeline/>
        </div>

    </section>
  )
}

export default About
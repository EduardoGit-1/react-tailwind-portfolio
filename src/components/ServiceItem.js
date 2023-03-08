import React from 'react'

const ServiceItem = ({title, icon, description}) => {
  return (
    <div className='bg-slate-800 rounded-xl shadow-lg hover:bg-slate-700 hover:-translate-y-2 transform transition'>
        <div className='p-8'>
            <div className='flex items-center justify-center w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'>
                {icon}
            </div>
            <h1 className='font-semibold text-lg my-2'>{title}</h1>
            <p className='text-gray-300'>{description}</p>
        </div>

    </div>
  )
}

export default ServiceItem
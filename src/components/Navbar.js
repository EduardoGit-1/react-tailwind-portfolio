import React, { useState } from 'react'
import navLinks from '../constants/navLinks'
const Navbar = ({activeLinkID}) => {
    const handleNav = (id, offset) => {
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + 1
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    return (
        <div className='hidden md:flex items-center justify-center pt-12 w-full h-5 fixed z-50 bg-slate-900'>
            <div className="w-11/12 h-[70px] bg-slate-800 rounded-2xl mt-2">
                <div className='px-2 flex justify-between items-center w-full h-full'>
                    <div className='flex items-center'>
                            <h1 onClick={() =>document.getElementById("home").scrollIntoView({behavior: 'smooth'})} 
                            className={`text-3xl font-bold mr-20 sm:text-4x pl-5 cursor-pointer ${activeLinkID == "home" ? 'text-indigo-500' : 'text-indigo-600'}`}>EDUARDO.</h1>
                            <ul className={`hidden md:flex space-x-20 text-lg font-semibold text-gray-200  transition-spacing duration-300`}>
                                {
                                    navLinks.slice(1).map((link, index)=>(
                                        <>
                                        <div className='flex relative items-center justify-center'>
                                            <li onClick={() => handleNav(link.id, link.offset)} className='cursor-pointer hover:text-white transition-colors duration-600 ease-in-out z-10'>
                                                    {link.title}
                                            </li>
                                            <div className={`absolute rounded-xl bg-indigo-600 ${(activeLinkID == link.id) ? 'w-28 h-11':'w-0 h-0 p-0'} transition-size duration-300 ease-in-out`}></div>
                                        </div>
                                      
                                        </>
                                    ))
                                }
                 
                            </ul>
                    </div>
                    {/* <div className=''>
                            <ul className='hidden md:flex space-x-20 text-lg font-semibold text-gray-200 mr-5'>
                                <li className='cursor-pointer hover:text-white transition-colors duration-600 ease-in-out'>Contact</li>
                            </ul>
                    </div> */}
                    {/* <div className = "sm:hidden" onClick={handleNav}>
                        {!nav ? <MenuIcon className ="w-5"/> : <XIcon className ="w-5"/>}
                
                    </div> */}
                </div>

                {/* <ul className={!nav? 'hidden' : 'absolute w-full px-8 py-3 space-y-3 font-semibold text-gray-200 bg-slate-800 rounded-b-2xl'}>
                    <li className='border-b-2 border-zinc-300 w-full'>Services</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Projects</li>
                    <li className='border-b-2 border-zinc-300 w-full'>About</li>
                </ul> */}
            </div>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import navLinks from '../constants/navLinks'
const NavbarMobile = ({activeLinkID}) => {
    const size = 50
    const handleNavClick = (id, offset) => {
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + offset
        window.scrollTo({top: y, behavior: 'smooth'});
    }
    return (
        <div className='-bottom-3 flex justify-center w-full h-[100px] bg-slate-900 fixed z-50 md:hidden'>
            <div className="w-11/12 h-[75px] bg-slate-800 rounded-2xl flex flex-row justify-around items-center px-2">
                {
                    navLinks.map((link, index) => (
                         <button className={`flex relative items-center justify-center`} onClick = {() => handleNavClick(link.id, link.mobileOffset)}>
                            <div className={`absolute rounded-full bg-indigo-600 ${(activeLinkID == link.id) ? 'w-[60px] h-[60px]':'w-0 h-0'} transition-size duration-300 ease-in-out `}></div>
                            {link.icon}
                        </button>
                        ))
                }
            </div>
        </div>
    )
}

export default NavbarMobile
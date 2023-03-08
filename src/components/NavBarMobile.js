import React, { useState } from 'react'
import navLinks from '../constants/navLinks'
const NavbarMobile = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const size = 50
    const handleNavClick = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
          })
        setSelectedIndex(id)
        
    }
    return (
        <div className='bottom-5 left-0.5 flex items-center justify-center w-full fixed z-50 md:hidden'>
            <div className="w-11/12 h-[75px] bg-slate-800 rounded-2xl flex flex-row justify-around items-center px-2">
                {
                    navLinks.map((button, index) => (
                        <button className={`flex items-center justify-center w-[60px] h-[60px] rounded-full ${(selectedIndex == button.id) ? 'bg-indigo-600':''}`} onClick = {() => handleNavClick(button.id)}>
                            {button.icon}
                        </button>
                        
                        ))
                }
            </div>
        </div>
    )
}

export default NavbarMobile
import React, {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div className='fixed w-full bg-[rgba(0,30,38,.6)] backdrop-blur-md z-10'>  
          <div className='relative flex items-center justify-between py-4 px-6 max-w-7xl mx-auto'>
            <div>
                <img className='h-8 md:h-10' src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="" />
            </div>
            <div>
              <ul className='hidden md:flex gap-4 text-sm font-semibold -mt-1'>
                <li>Beranda</li>
                <li>Tentang</li>
                <li>Staf</li>
                <li>Proker</li>
                <li>Blog</li>
                <li>Portofolio</li>
              </ul>
            </div>
            <div className='hidden md:block'>
              <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={50}/>
            </div>
            <div className='text-white scale-125 -mt-2 cursor-pointer md:hidden'>
                <RxHamburgerMenu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
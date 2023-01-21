import React, {useState, useEffect, useRef} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiCloseFill} from 'react-icons/ri'
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  })
  return (
    <div className='fixed w-full bg-[rgba(0,30,38,.6)] backdrop-blur-md z-10'>  
          <div className='flex items-center justify-between py-4 px-6 max-w-7xl mx-auto'>
            <div>
                <img className='h-8 md:h-10' src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="" />
            </div>

            {/* DESKTOP MODE */}
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

            {/* MOBILE MODE */}
            <div onClick={handleOpen} className='text-white cursor-pointer md:hidden z-50'>
                {!open? <RxHamburgerMenu className='w-5 h-5'/> : <RiCloseFill className='w-5 h-5 scale-125 z-50'/>}
            </div>

            <div className={open? 'menu' : 'hidden'}>
              <ul className='bg-[rgb(55,65,81)] rounded-md mx-2 py-3'>
                <li>Beranda</li>
                <li className='my-1'>Tentang</li>
                <li className='my-1'>Staf</li>
                <li className='my-1'>Proker</li>
                <li className='my-1'>Blog</li>
                <li className='my-1'>Portofolio</li>
                <li className='pt-1'><DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={50}/></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
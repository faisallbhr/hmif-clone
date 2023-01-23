import React, {useState, useEffect, useRef} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiCloseFill} from 'react-icons/ri'
import {BsSun,BsMoonStars, BsMoon} from 'react-icons/bs'

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
    <div className='fixed w-full bg-[rgba(0,30,38,.6)] backdrop-blur-md z-10' ref={menuRef}>  
          <div className='flex items-center justify-between py-4 px-6 max-w-7xl mx-auto'>
            <div>
                <img className='h-8 md:h-10' src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="" />
            </div>

            {/* DESKTOP MODE */}
            <div>
              <ul className='hidden md:flex gap-4 text-sm lg:text-base font-semibold -mt-1'>
                <li>Beranda</li>
                <li>Tentang</li>
                <li>Staf</li>
                <li>Proker</li>
                <li>Blog</li>
                <li>Portofolio</li>
              </ul>
            </div>
            <div className='hidden md:block'>
              <input type="checkbox" id="darkmode-toggle" className='hidden darkmode' />
              <label 
              className='toggle w-[50px] h-[25px] relative block bg-[#242424] border border-gray-500 rounded-full cursor-pointer '
              htmlFor="darkmode-toggle">
                <BsMoon className='moon'/>
                <BsSun className='sun'/>
              </label>
            </div>

            {/* MOBILE MODE */}
            <div onClick={handleOpen} className='text-white cursor-pointer md:hidden z-50'>
                {!open? <RxHamburgerMenu className='w-5 h-5'/> : <RiCloseFill className='w-5 h-5 scale-125 z-50'/>}
            </div>

            <div className={open? 'menu md:hidden' : 'hidden'}>
              <ul className='bg-[rgb(55,65,81)] rounded-md mx-2 py-2 font-semibold text-lg'>
                <li className='my-1'>Beranda</li>
                <li className='my-1'>Tentang</li>
                <li className='my-1'>Staf</li>
                <li className='my-1'>Proker</li>
                <li className='my-1'>Blog</li>
                <li className='my-1'>Portofolio</li>
                <li className='flex justify-center my-2'>
                  <input type="checkbox" id="darkmode-toggle-mbl" className='hidden darkmode' />
                  <label 
                  className='toggle w-[50px] h-[25px] relative block bg-[#242424] border border-gray-500 rounded-full cursor-pointer '
                  for="darkmode-toggle-mbl">
                    <BsMoon className='moon'/>
                    <BsSun className='sun'/>
                  </label>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
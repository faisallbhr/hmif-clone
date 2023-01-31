import React, {useState, useEffect, useRef} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RiCloseFill} from 'react-icons/ri'
import {BsSun,BsMoonStars} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // HAMBURGER
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }

  // MOBILE MENU
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
  }, [menuRef])

  // DARKMODE
  const [theme, setTheme] = useState('dark')
  
  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (theme==='dark'){
    document.documentElement.classList.add('dark')
    }else{
    document.documentElement.classList.remove('dark')
    }
  }, [toggleTheme])

  return (
    <header className='fixed w-full bg-[hsla(0,0%,100%,.6)] dark:bg-[rgba(0,30,38,.6)] backdrop-blur-md z-10' ref={menuRef}>  
          <div className='flex items-center justify-between py-4 px-6 max-w-7xl mx-auto'>
            <div>
                <img id='hmif' className='h-8 md:h-10 ' src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="" />
            </div>

            {/* DESKTOP MODE START*/}
            <div>
              <ul className='hidden md:flex gap-4 text-sm lg:text-base font-semibold text-gray-900 dark:text-gray-100'>
                <li><NavLink className='nav' activeClassName='active' to='/'>Beranda</NavLink></li>
                <li><NavLink className='nav' activeClassName='active' to='/tentang'>Tentang</NavLink></li>
                <li><NavLink className='nav' activeClassName='active' to='/staf'>Staf</NavLink></li>
                <li><NavLink className='nav' activeClassName='active' to='/proker'>Proker</NavLink></li>
                <li><NavLink className='nav' activeClassName='active' to='/blog'>Blog</NavLink></li>
                <li><NavLink className='nav' activeClassName='active' to='/portofolio'>Portofolio</NavLink></li>
              </ul>
            </div>
            <div className='hidden md:block'>
              <input checked={theme === 'light'} type="checkbox" id="darkmode-toggle" className='hidden darkmode' />
              <label 
              onClick={toggleTheme}
              className='toggle w-[50px] h-[25px] relative block bg-[#242424] border border-gray-500 rounded-full cursor-pointer '
              htmlFor="darkmode-toggle">
                <BsMoonStars className='moon'/>
                <BsSun className='sun'/>
              </label>
            </div>
            {/* DESKTOP MODE END*/}

            {/* MOBILE MODE START*/}
            <div onClick={handleOpen} className='text-gray-900 dark:text-gray-100 cursor-pointer md:hidden z-10'>
                {!open? <RxHamburgerMenu className='w-5 h-5'/> : <RiCloseFill className='w-5 h-5 scale-125'/>}
            </div>

            <div className={open? 'menu md:hidden' : 'hidden'}>
              <ul className='bg-white text-gray-900 dark:text-gray-100 dark:bg-[rgb(55,65,81)] rounded-md mx-2 py-2 font-semibold text-xl'>
                <li className='py-2'><NavLink onClick={handleOpen} className='nav' activeClassName='active' to='/'>Beranda</NavLink></li>
                <li className='py-2'><NavLink onClick={handleOpen} className='nav' activeClassName='active' to='/tentang'>Tentang</NavLink></li>
                <li className='py-2'><NavLink onClick={handleOpen} className='nav' activeClassName='active' to='/staf'>Staf</NavLink></li>
                <li className='py-2'><NavLink onClick={handleOpen} className='nav' activeClassName='active' to='/proker'>Proker</NavLink></li>
                <li className='py-2'><NavLink onClick={handleOpen} className='nav' activeClassName='active' to='/portofolio'>Portofolio</NavLink></li>
                <li className='flex justify-center py-2'>
                  <input checked={theme === 'light'} type="checkbox" id="darkmode-toggle-mbl" className='hidden darkmode' />
                  <label 
                  onClick={toggleTheme}
                  className='toggle w-[50px] h-[25px] relative block bg-[#242424] border border-gray-500 rounded-full cursor-pointer '
                  for="darkmode-toggle-mbl">
                    <BsMoonStars className='moon'/>
                    <BsSun className='sun'/>
                  </label>
                </li>
              </ul>
            </div>
            {/* MOBILE MODE END*/}
        </div>
    </header>
  )
}

export default Navbar
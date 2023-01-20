import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {

  window.onscroll = function(){
    const header = document.getElementById('header');
    const fix = header.offsetTop;

    if(window.pageYOffset > fix){
      header.classList.add('header-fix');
    } else{
      header.classList.remove('header-fix');
    }
  }

  return (
    <div className='fixed w-full bg-[rgba(0,30,38,.6)] backdrop-blur-md z-10'>  
          <div className='relative flex items-center justify-between py-4 px-6 max-w-7xl mx-auto'>
            <div>
                <img className='h-8 md:h-10' src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="" />
            </div>
            <div className='text-white scale-125 -mt-2 cursor-pointer'>
                <RxHamburgerMenu/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
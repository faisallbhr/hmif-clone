import React from 'react'
import {FiInstagram,FiLinkedin,FiYoutube} from 'react-icons/fi'
import {FaTiktok} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-white dark:bg-gray-900 pt-10 text-gray-700 dark:text-white'>
        <div className='container flex flex-col md:flex-row gap-2 justify-between'>
            <div className='md:flex items-center gap-4 mr-4'>
                <img id='hmif-footer'
                className='h-8 md:h-12 mx-auto relative md:top-1'
                src="https://hmifunej.id/images/HMIF%20WORDMARK%20LOGO.png" alt="HMIF" />
                <span className='md:inline-block h-[80%] w-[1px] bg-white'></span>
                <p className='text-sm text-center md:text-left text-gray-500'>© 2022 Dibuat dengan Cinta dan Perjuangan — HMIF UNEJ</p>
            </div>
            <div className='flex justify-center gap-6'>
                <FiLinkedin className='h-12 w-12 bg-black text-white p-2 rounded-full border'/>
                <FiInstagram className='h-12 w-12 bg-black text-white p-2 rounded-full border'/>
                <FaTiktok className='h-12 w-12 bg-black text-white p-2 rounded-full border'/>
                <FiYoutube className='h-12 w-12 bg-black text-white p-2 rounded-full border'/>
                <MdEmail className='h-12 w-12 bg-black text-white p-2 rounded-full border'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
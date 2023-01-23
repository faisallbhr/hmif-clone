import React from 'react'
import Navbar from '../components/Navbar'
import Picture from '../assets/projectnf.png'

const Capek = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen flex justify-center items-center'>
          <img src={Picture} alt="" />
      </div>
    </div>
  )
}

export default Capek
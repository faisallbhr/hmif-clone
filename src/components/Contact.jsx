import React from 'react'

const Contact = () => {
  return (
    <div className='px-6 py-20 max-w-xl xl:max-w-7xl mx-auto flex flex-col xl:flex-row gap-10 justify-center items-center'>
      <div className='xl:w-3/5'>
        <h1 className='text-3xl md:text-4xl font-bold'>Hey, Ada masukan untuk kami?</h1>
        <p className='py-10 text-gray-400 md:text-xl'>Kami tunggu saran dan masukan anda</p>
      </div>
      <div className='bg-gray-700 p-8 rounded-lg shadow-2xl w-full xl:w-2/5'>
        <form action="">
          <h1 className='text-xl font-semibold pb-4'>Kritik atau Saran</h1>
          <p className='py-2 font-semibold'>Nama</p>
          <input
          className='w-full border border-gray-500 rounded-md bg-gray-800 px-4 py-2'
          type="text" placeholder='HMIF'/>
          <p className='py-2 font-semibold'>Email</p>
          <input 
          className='w-full border border-gray-500 rounded-md bg-gray-800 px-4 py-2'
          type="email" placeholder='hmif.unej@example.org'/>
          <p className='py-2 font-semibold'>Masukan</p>
          <textarea className='w-full border border-gray-500 rounded-md bg-gray-800 px-4 py-2' 
          name="" id="" cols="30" rows="10"></textarea>
          <h1 className='text-center bg-green-600 hover:bg-green-700 rounded-md py-1 text-sm mt-4 shadow-lg'>KIRIM MASUKAN</h1>
        </form>
      </div>
    </div>
  )
}

export default Contact
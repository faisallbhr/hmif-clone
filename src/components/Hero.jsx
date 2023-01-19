import React from 'react'

const Hero = () => {
  return (
    <div className='pt-[72px]'>
    <div id='hero' className='text-center lg:text-left'>
      <div className='container'>
      <div className='grid lg:grid-cols-2 gap-8 '>
        <div className=' lg:pt-24'>
            <h1 className='font-extrabold text-4xl lg:text-6xl'>Selangkah Lebih Dekat dengan</h1>
            <h1 className='font-extrabold text-4xl lg:text-6xl text-[rgb(16,185,129)]'>HMIF UNEJ</h1>
            <p className='py-4 lg:py-8 lg:text-xl'>Himpunan Mahasiswa Informatika (HMIF) Universitas Jember merupakan organisasi dibawah naungan Fakultas Ilmu komputer yang bertujuan untuk menampung aspirasi serta meningkatkan kualitas mahasiswa di dalam lingkungan program studi Informatika Universitas Jember.</p>
          <div className='text-center flex flex-col md:flex-row md:justify-center lg:justify-start gap-2'>
              <p className='bg-[rgb(16,185,129)] rounded-[4px] text-lg py-2 font-bold md:px-6'>Tentang</p>
              <p className='rounded-[4px] border-[2px] border-[rgb(16,185,129)] text-lg py-2 font-bold md:px-6'>Card</p>
          </div>
        </div>
        <div className='hidden md:block my-auto '>
            <img className='h-[30rem] lg:h-auto mx-auto' src="https://hmifunej.id/images/HMIF-LOGO-BESAR.png" alt="" />
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
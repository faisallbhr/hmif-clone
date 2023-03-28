import React from 'react'
import {MdSearch} from 'react-icons/md'
import {FaRegHandshake,FaMoneyBillWave} from 'react-icons/fa'
import {BiBody,BiPen} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  AOS.init();
  AOS.init({
    once:true
  })
  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
      <div className='max-w-6xl px-4 mx-auto py-20 overflow-hidden'>
        {/* BLOG */}
        <div className='flex flex-wrap items-center'>
          <div className='md:w-1/2 px-20 md:pt-20'>
            <p className='text-3xl font-bold pb-4 text-gray-700 dark:text-white'>Blog</p>
            <p className='lg:text-lg text-gray-500 dark:text-gray-300'>Cari tahu berbagai informasi, tips dan trik menarik seputar teknologi yang sudah kami rangkum untuk dapat kalian baca kapanpun dan dimanapun.</p>
            <p className='text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 pt-2'><button>Selengkapnya</button></p>
          </div>
          <div className='relative md:left-16 md:w-1/2 mt-40 md:-mt-20'>
              <img data-aos="fade-up-left"
              data-aos-duration="1000"
              className='max-w-[210px] shadow-xl rounded-lg absolute -top-16 left-64' src="https://hmifunej.id/images/beranda/component-article-1.jpg" alt="" />
              <img data-aos="zoom-in"
              data-aos-duration="1000"
              className='max-w-[180px] shadow-xl rounded-lg absolute -top-24 left-12' src="https://hmifunej.id/images/beranda/component-article-2.jpg" alt="" />
              <img data-aos="fade-up-right"
              data-aos-duration="1000"
              className='max-w-[200px] shadow-xl rounded-lg absolute top-36 -left-5 right-0' src="https://hmifunej.id/images/beranda/component-article-3.jpg" alt="" />
         </div>
        </div>

        {/* DIVISION */}
        <div className='flex flex-wrap items-center mt-80 md:mt-56 pt-10 md:pt-0'>
          {/* LOGO */}
          <div className='w-full mx-10 md:mx-0 md:w-1/2 flex flex-col lg:flex-row justify-center items-center lg:gap-4'>
              <div className='w-full md:w-auto'>
                <div data-aos="fade-up"
                data-aos-duration="1000"
                className='flex flex-col gap-2 py-4 items-center justify-center my-4 px-4 md:h-40 md:w-60 shadow-lg bg-green-800 rounded-lg text-center'>
                    <div className='rounded-full bg-white text-black mx-auto w-14 h-14 md:w-20 md:h-20 flex items-center'>
                      <MdSearch className='mx-auto w-12 h-12 md:w-20 md:h-20 p-1'/>
                    </div>
                    <p>LITBANG</p>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1000"
                className='flex flex-col gap-2 py-4 items-center justify-center my-4 px-4 md:h-40 md:w-60 shadow-lg bg-green-600 rounded-lg text-center'>
                    <div className='rounded-full bg-white text-black mx-auto w-14 h-14 md:w-20 md:h-20 flex items-center'>
                      <FaRegHandshake className='mx-auto w-12 h-12 md:w-20 md:h-20 p-1'/>
                    </div>
                    <p>HUMAS</p>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1000"
                className='flex flex-col gap-2 py-4 items-center justify-center my-4 px-4 md:h-40 md:w-60 shadow-lg bg-green-400 rounded-lg text-center'>
                    <div className='rounded-full bg-white text-black mx-auto w-14 h-14 md:w-20 md:h-20 flex items-center'>
                      <BiBody className='mx-auto w-12 h-12 md:w-20 md:h-20 p-1'/>
                    </div>
                    <p>PSDM</p>
                </div>
              </div>
              <div className='w-full md:w-auto'>
                <div data-aos="fade-up"
                data-aos-duration="1000"
                className='flex flex-col gap-2 py-4 items-center justify-center my-0 lg:my-4 px-4 md:h-40 md:w-60 shadow-lg bg-green-700 rounded-lg text-center'>
                    <div className='rounded-full bg-white text-black mx-auto w-14 h-14 md:w-20 md:h-20 flex items-center'>
                      <FaMoneyBillWave className='mx-auto w-12 h-12 md:w-20 md:h-20 p-2'/>
                    </div>
                    <p>KWU</p>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1000"
                className='flex flex-col gap-2 py-4 items-center justify-center my-4 px-4 md:h-40 md:w-60 shadow-lg bg-green-500 rounded-lg text-center'>
                    <div className='rounded-full bg-white text-black mx-auto w-14 h-14 md:w-20 md:h-20 flex items-center'>
                      <BiPen className='mx-auto w-12 h-12 md:w-20 md:h-20 p-1'/>
                    </div>
                    <p>MEDIATEK</p>
                </div>
              </div>
          </div>
          {/* PENJELASAN */}
          <div className='md:w-1/2 py-10 px-20'>
            <p className='text-3xl font-bold pb-4 text-gray-700 dark:text-white'>Divisi</p>
            <p className='lg:text-lg text-gray-500 dark:text-gray-300'>Terdapat lima divisi yang kami miliki dan tiap divisi menjalankan tugasnya masing-masing. Cari tahu lebih lanjut mengenai tugas dan tanggung jawab masing-masing divisi.</p>
            <p className='text-gray-300 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300 pt-2'><button>Selengkapnya</button></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
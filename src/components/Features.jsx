import React from 'react'
import {RiFilePaper2Line, RiNewspaperLine} from 'react-icons/ri'
import {TbCertificate, TbPuzzle} from 'react-icons/tb'
import {MdNavigateNext} from 'react-icons/md'

const Features = () => {
  return (
    <div className='container'>
        <div className='font-bold text-gray-800 dark:text-white text-3xl md:text-4xl'>
            Jelajahi <br /> Semua Fitur yang Tersedia
        </div>
        <div>
            <span className='inline-block mr-2 w-40 h-1 rounded-full bg-[rgb(16,185,129)]'></span>
            <span className='inline-block mr-2 w-3 h-1 rounded-full bg-[rgb(16,185,129)]'></span>
            <span className='inline-block mr-2 w-1 h-1 rounded-full bg-[rgb(16,185,129)]'></span>
        </div>
        <div className='grid grid-cols-1 pt-10 pb-20 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            <div className='border-[2px] rounded-xl border-green-400 dark:border-green-300'>
                <div className='p-10'>
                    <RiFilePaper2Line className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl text-gray-700 dark:text-white'>Artikel</h3>
                    <p className='h-[150px] text-gray-500 dark:text-gray-300'>Kumpulan informasi, tips dan trik seputar teknologi yang sudah kami rangkum untuk dapat kalian baca kapanpun dan dimanapun.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-400 dark:border-green-300'>
                <div className='p-10'>
                    <RiNewspaperLine className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl text-gray-700 dark:text-white'>Berita</h3>
                    <p className='h-[150px] text-gray-500 dark:text-gray-300'>Berbagai informasi yang up to date yang bikin kalian tahu apa aja yang terjadi di dunia perkuliahan maupun teknologi.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-400 dark:border-green-300'>
                <div className='p-10'>
                    <TbPuzzle className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl text-gray-700 dark:text-white'>Portfolio</h3>
                    <p className='h-[150px] text-gray-500 dark:text-gray-300'>Segala dokumentasi portofolio mahasiswa informatika yang memiliki prestasi baik di dunia perkuliahan maupun luar perkuliahan.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-400 dark:border-green-300'>
                <div className='p-10'>
                    <TbCertificate className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl text-gray-700 dark:text-white'>E-Certificate</h3>
                    <p className='h-[150px] text-gray-500 dark:text-gray-300'>Tempat mengunduh e-sertifikat yang telah kalian dapat dari berbagai event yang diselenggarakan oleh Himpuanan Mahasiswa Informatika.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
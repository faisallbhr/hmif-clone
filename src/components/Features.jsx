import React from 'react'
import {RiFilePaper2Line, RiNewspaperLine} from 'react-icons/ri'
import {TbCertificate, TbPuzzle} from 'react-icons/tb'
import {MdNavigateNext} from 'react-icons/md'

const Features = () => {
  return (
    <div className='container'>
        <div className='font-bold text-3xl pb-8'>
            Jelajahi <br /> Semua Fitur yang Tersedia
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            <div className='border-[2px] rounded-xl border-green-300'>
                <div className='p-10'>
                    <RiFilePaper2Line className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl'>Artikel</h3>
                    <p className='h-[150px]'>Kumpulan informasi, tips dan trik seputar teknologi yang sudah kami rangkum untuk dapat kalian baca kapanpun dan dimanapun.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-300'>
                <div className='p-10'>
                    <RiNewspaperLine className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl'>Berita</h3>
                    <p className='h-[150px]'>Berbagai informasi yang up to date yang bikin kalian tahu apa aja yang terjadi di dunia perkuliahan maupun teknologi.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-300'>
                <div className='p-10'>
                    <TbPuzzle className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl'>Portfolio</h3>
                    <p className='h-[150px]'>Segala dokumentasi portofolio mahasiswa informatika yang memiliki prestasi baik di dunia perkuliahan maupun luar perkuliahan.</p>
                    <div className='mt-4 h-9 w-9 rounded-full bg-[rgb(16,185,129)] flex justify-center items-center'>
                        <MdNavigateNext className='h-8 w-8'/>
                    </div>
                </div>
            </div>
            <div className='border-[2px] rounded-xl border-green-300'>
                <div className='p-10'>
                    <TbCertificate className='h-12 w-12 text-[rgb(16,185,129)]'/>
                    <h3 className='pt-5 pb-2 font-bold text-2xl'>E-Certificate</h3>
                    <p className='h-[150px]'>Tempat mengunduh e-sertifikat yang telah kalian dapat dari berbagai event yang diselenggarakan oleh Himpuanan Mahasiswa Informatika.</p>
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
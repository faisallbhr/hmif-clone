import React from 'react'

const Blog = () => {
  return (
    <div className='bg-gray-900 h-screen'>
      <div className='container overflow-hidden'>
        <div className='flex flex-wrap items-center'>
          <div className='w-1/2'>
            <p className='text-3xl font-bold pb-4'>Blog</p>
            <p>Cari tahu berbagai informasi, tips dan trik menarik seputar teknologi yang sudah kami rangkum untuk dapat kalian baca kapanpun dan dimanapun.</p>
            <p className='text-gray-400 pt-2'><a href="#">Selengkapnya</a></p>
          </div>
          <div className='relative w-1/2'>
              <img className='max-w-[210px] rounded-lg absolute -top-16 left-72' src="https://hmifunej.id/images/beranda/component-article-1.jpg" alt="" />
              <img className='max-w-[180px] rounded-lg absolute -top-24 left-20' src="https://hmifunej.id/images/beranda/component-article-2.jpg" alt="" />
              <img className='max-w-[200px] rounded-lg absolute top-36' src="https://hmifunej.id/images/beranda/component-article-3.jpg" alt="" />
         </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Blog
import React from 'react'

const BlogDetails = () => {
  return (
    <div className='container'>
        <div className='py-10'>
            <div className='text-center max-w-lg mx-auto'>
                <h1 className='text-3xl font-bold pb-4'>Blog</h1>
                <p>Cari tahu berbagai informasi, tips dan trik menarik seputar teknologi yang sudah kami rangkum untuk dapat kalian baca kapanpun dan dimanapun.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                <div className='bg-gray-900 mx-auto rounded-lg p-4 hover:scale-105 duration-500 shadow-lg hover:shadow-2xl'>
                    <img className='w-full rounded-lg' src="https://th.bing.com/th/id/OIP.UX9k4Dcx7kKXy5hmhqryCQHaDt?w=292&h=174&c=7&r=0&o=5&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold pt-4 pb-2'>Tips dan Trik Kuliah di Jurusan Informatika</h1>
                    <p className='text-gray-400 pb-4'>Halo Infortination! Siapa yang belum tau jurusan Informatika nih? Yap… Jurusan yang berbau-bau dunia IT dan Teknologi ini mempelajari ilmu komputer da..</p>
                    <span className='inline-block my-2 rounded-full py-px px-2 bg-gray-600 text-gray-300'>#Informatics</span>
                </div>
                <div className='bg-gray-900 mx-auto rounded-lg p-4 hover:scale-105 duration-500 shadow-lg hover:shadow-2xl'>
                    <img className='w-full rounded-lg' src="https://th.bing.com/th/id/OIP.UX9k4Dcx7kKXy5hmhqryCQHaDt?w=292&h=174&c=7&r=0&o=5&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold pt-4 pb-2'>Tips dan Trik Kuliah di Jurusan Informatika</h1>
                    <p className='text-gray-400 pb-4'>Halo Infortination! Siapa yang belum tau jurusan Informatika nih? Yap… Jurusan yang berbau-bau dunia IT dan Teknologi ini mempelajari ilmu komputer da..</p>
                    <span className='inline-block my-2 rounded-full py-px px-2 bg-gray-600 text-gray-300'>#Informatics</span>
                </div>
                <div className='bg-gray-900 mx-auto rounded-lg p-4 hover:scale-105 duration-500 shadow-lg hover:shadow-2xl'>
                    <img className='w-full rounded-lg' src="https://th.bing.com/th/id/OIP.UX9k4Dcx7kKXy5hmhqryCQHaDt?w=292&h=174&c=7&r=0&o=5&pid=1.7" alt="" />
                    <h1 className='text-xl font-bold pt-4 pb-2'>Tips dan Trik Kuliah di Jurusan Informatika</h1>
                    <p className='text-gray-400 pb-4'>Halo Infortination! Siapa yang belum tau jurusan Informatika nih? Yap… Jurusan yang berbau-bau dunia IT dan Teknologi ini mempelajari ilmu komputer da..</p>
                    <span className='inline-block my-2 rounded-full py-px px-2 bg-gray-600 text-gray-300'>#Informatics</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails
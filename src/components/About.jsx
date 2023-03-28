import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import SwiperCore, { Pagination } from 'swiper'
import { MdCall, MdMail, MdMap} from 'react-icons/md'

SwiperCore.use([Pagination])

const About = () => {
  return (
    <div className='pt-16 md:pt-[72px] '>
        {/* 1 */}
        <div className='bg-gray-100 dark:bg-gray-900 text-center'>
            <div className='px-6 py-20 max-w-xl mx-auto'>
                <span className='bg-green-600 text-sm px-3 rounded-full font-bold'>TENTANG</span>
                <h1 className='dark:text-white text-gray-900 font-bold text-3xl md:text-4xl py-3'>Tentang HMIF UNEJ</h1>
                <p className='pt-3 text-gray-500 dark:text-gray-300'>Cari tau lebih dalam mengenai Himpunan Mahasiswa Informatika Universitas Jember.</p>
            </div>
        </div>

        {/* 2 */}
        <div className='container'>
            <div className='flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center'>
                <h1 className='text-6xl text-black dark:text-white font-extrabold text-center'>TENTANG HMIF</h1>
                <img className='h-80 lg:h-96' src="https://hmifunej.id/images/HMIF-LOGO-BESAR.png" alt="" />
            </div>
        </div>
        <div className='container'>
            <span className='w-full inline-block h-[1px] bg-gray-300'></span>
        </div>
        <div className='container'>
            <h1 className='text-gray-700 dark:text-white font-bold text-2xl md:text-3xl text-center'>Sejarah</h1>
            <p className='text-gray-500 dark:text-gray-300 py-4 md:px-8'>HMIF adalah organisasi kemahasiswaan di tingkat program studi informatika yang di bentuk oleh mahasiswa program studi informatika yang berdiri pada tahun 2018 serta melaksanakan kegiatan yang menunjang akademik dan non akademik di lingkup program studi informatika yang bersifat eksekutif, aspiratif, dan advokatif. HMIF berfungsi sebagai wadah komunikasi, pemersatu, menggali dan mengembangkan potensi bagi para anggotanya untuk mewujudkan mahasiswa yang unggul di bidang iptek.</p>
        </div>
        <div className='container'>
            <span className='w-full inline-block h-[1px] bg-gray-300'></span>
        </div>
        <div className='container'>
            <h1 className='text-gray-700 dark:text-white font-bold text-2xl md:text-3xl text-center'>Makna Logo</h1>
            <p className='text-gray-500 dark:text-gray-300 py-4 md:px-8'>1. Tiga bentuk hexagon melambangkan bahwa Informatika merupakan Program Studi ke-3 yang berada di Fakultas Ilmu Komputer Universitas Jember. <br />2. Lambang infinity berasal dari angka 8 yang merupakan tanggal terbentuknya Himpunan Mahasiswa Informatika (HMIF) yang melambangkan rasa kebersamaan, sifat gotong royong dan ikatan yang kuat. <br />3. Warna kuning melambangkan kreativitas dan inovasi generasi muda/generasi emas. Kuning juga melambangkan kehangatan yang berarti inovasi yang dibuat harus memberikan kehangatan bagi diri sendiri dan orang lain Warna abu-abu melambangkan warna identitas Fakultas Ilmu Komputer Universitas Jember.</p>
        </div>

        {/* 3 */}
        <div className='dark:bg-gray-900 py-10'>
            <div className="container">
            <div className="bg-green-200 dark:bg-gray-600 rounded-md lg:py-10">
                    <Swiper
                    pagination={{
                        clickable: true, 
                        el:'.swiper-pagination',
                    }}
                    modules={{Pagination}}
                    className="mySwiper"
                    >
                        <SwiperSlide className='flex flex-col lg:flex-row items-center'>
                            <div className='px-10 lg:px-20 py-10 max-w-xl'>
                                <h1 className='font-bold text-2xl text-gray-700 dark:text-gray-200'>Visi</h1>
                                <p className='text-gray-700 dark:text-gray-200 py-4'>Mewujudkan HMIF sebagai rumah kolaboratif demi terciptanya optimalisasi potensi dan kebermanfaatan bagi keluarga besar mahasiswa informatika</p>
                            </div>
                            <div className='lg:pr-20'>
                                <img className='mx-auto' src="https://hmifunej.id/images/visi.svg" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col lg:flex-row items-center'>
                            <div className='px-10 lg:px-20  py-10 max-w-xl'>
                                <h1 className='font-bold text-2xl text-gray-700 dark:text-gray-200'>Misi</h1>
                                <p className='text-gray-700 dark:text-gray-200 py-4'>1. Menciptakan budaya organisasi yang apresiatif dan suportif.
                                <br /> <br />
                                2. Melanjutkan dan memaksimalkan kualitas program kerja yang bermanfaat dan tepat sasaran untuk mahasiswa informatika.
                                <br /> <br />
                                3. Menciptakan semangat kolaborasi dan eksplorasi keunggulan organisasi lain untuk kemudian diperlajari dan diimplementasikan pada ranah internal.
                                <br /> <br />
                                4. Mewadahi pengembangan diri yang berorientasi pada kreasi dan inovasi untuk meningkatkan prestasi seluruh mahasiswa informatika</p>
                            </div>
                            <div className='lg:pr-20'>
                                <img className='mx-auto' src="https://hmifunej.id/images/misi.svg" alt="" />
                            </div>
                        </SwiperSlide>
                        <div className='swiper-pagination w-full '></div>
                    </Swiper>
                </div>
            </div>
        </div>

        {/* 4 */}
        <div className="px-6 my-20 py-20 max-w-4xl mx-6 md:mx-auto bg-gray-100 rounded-md shadow-xl dark:bg-gray-800">
        {/* eslint-disable-next-line */}
        <iframe className='mx-auto w-full h-[600px] pb-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3727173304887!2d113.71421895085781!3d-8.165152284051013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd694351d727e69%3A0xec33c34804a10832!2sUniversitas%20Jember!5e0!3m2!1sid!2sid!4v1674608540308!5m2!1sid!2sid" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 text-black dark:text-white'>
                    <div className='flex flex-col mx-auto items-center max-w-[205px]'>
                        <div className='bg-green-100 shadow-xl w-28 h-28 rounded-full text-green-500 flex justify-center items-center'>
                            <MdMap className='h-16 w-16'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl pt-7 pb-5 text-center'>Universitas Jember</h1>
                            <p>Jl. Kalimantan Tegalboto No.37, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121</p>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto items-center max-w-[205px]'>
                        <div className='bg-green-100 shadow-xl w-28 h-28 rounded-full text-green-500 flex justify-center items-center'>
                            <MdCall className='h-16 w-16'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl pt-7 pb-5 text-center'>Call</h1>
                            <p>+62856-0481-1805 (Afifah) <br />+62895-3663-37684 (Arvito) <br />+62821-4340-7573 (Deana)</p>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto items-center max-w-[205px]'>
                        <div className='bg-green-100 shadow-xl w-28 h-28 rounded-full text-green-500 flex justify-center items-center'>
                            <MdMail className='h-16 w-16'/>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl pt-7 pb-5 text-center'>Email</h1>
                            <p>hmif@cs.unej.ac.id <br /> hmifunej@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About
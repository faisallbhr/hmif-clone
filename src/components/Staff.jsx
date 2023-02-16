import React, { useEffect, useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Staff = () => {
    const url = 'https://api-developer.hmifunej.id/api/getStaff'
    const imageUrl = 'https://api-developer.hmifunej.id/assets/upload/staff'
    const [staff, setStaff] = useState([])

    const getDataStaff = async ()=> {
        const response = await fetch(url)
        const dataStaff = await response.json()
        setStaff(dataStaff.data)
    }

    useEffect(()=> {
        getDataStaff()
    }, [])

    const [pickStaff, setPickStaff] = useState([{role: ''}])

    const [btnState, setBtnState] = useState(false)
    const handleBtn = (e)=> {
        setPickStaff(staff.filter(q => q.role === e.target.value))
        if (pickStaff[0].role !== e.target.value){
            setBtnState(true)
        }else{
            setBtnState(btnState=>!btnState)
        }
    }

    const ViewStaff = ()=> {
        if (btnState===false){
            return staff.map((person, i) => {
                return(
                    <div className='relative items-center border border-gray-300 dark:border-gray-700 text-center rounded-lg p-4 w-80 h-80' key={i}>
                        <div className='absolute whitespace-nowrap left-1/2 -translate-x-1/2 text-xs bg-green-500 rounded-full font-bold py-1 px-2.5'>{person.role}</div>
                        <img className='rounded-lg' src={`${imageUrl}/${person.image}`} alt="" />
                        <div className='py-4 font-bold text-xl text-gray-700 dark:text-white'>{person.name}</div>
                        <div className='text-gray-500 dark:text-gray-300'>{person.name_role}</div>
                        <div className='flex justify-center gap-4 pt-4'>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiLinkedin className='w-5 h-5'/></a>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiInstagram className='w-5 h-5'/></a>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiGithub className='w-5 h-5'/></a>
                        </div>
                    </div>
            )
        })
    }else{
        return pickStaff.map((person, i) => {
            return(
                <div className='relative items-center border border-gray-300 dark:border-gray-700 text-center rounded-lg p-4 w-80 h-80' key={i}>
                    <div className='absolute whitespace-nowrap left-1/2 -translate-x-1/2 text-xs bg-green-500 rounded-full font-bold py-1 px-2.5'>{person.role}</div>
                    <img className='rounded-lg' src={`${imageUrl}/${person.image}`} alt="" />
                    <div className='py-4 font-bold text-xl text-gray-700 dark:text-white'>{person.name}</div>
                    <div className='text-gray-500 dark:text-gray-300'>{person.name_role}</div>
                    <div className='flex justify-center gap-4 pt-4'>
                        <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiLinkedin className='w-5 h-5'/></a>
                        <a href={person.ig_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiInstagram className='w-5 h-5'/></a>
                        <a href={person.gh_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiGithub className='w-5 h-5'/></a>
                    </div>
                </div>
        )
    })
    }
    }

    return (
        <div className='pt-16 md:pt-[72px] bg-green-100 dark:bg-gray-800'>
            <div className=' text-center'>
                <div className='px-6 py-10 max-w-3xl mx-auto'>
                    <h1 className='dark:text-white text-gray-900 font-bold text-3xl py-3'>Pengurus HMIF UNEJ Periode 2021/2022</h1>
                    <span className='inline-block w-40 h-1 bg-green-600 rounded-full'></span>
                    <span className='inline-block w-5 ml-2 h-1 bg-green-600 rounded-full'></span>
                    <span className='inline-block w-2 ml-2 h-1 bg-green-600 rounded-full'></span>
                    <p className='pt-3 text-gray-500 dark:text-gray-300'>Sekelompok orang yang berada dalam satu kondisi dan satu tempat yang sama, dibesarkan dengan latar belakang yang berbeda beda namun tetap memiliki rasa kekeluargaan dan visi misi yang sama.</p>
                    <p className='pt-3 text-gray-800 dark:text-gray-200 font-bold'>"Banyak Susahnya Namun Tetap Bersama."</p>
                </div>
                <div className='max-w-4xl mx-auto px-4 pb-20'>
                    <div className='flex flex-wrap justify-center  border border-green-600 rounded-lg font-semibold text-green-600 text-sm'>
                        <button id='bph' value='Badan Pengurus Harian' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>BPH</button>
                        <button id='humas' value='Hubungan Masyarakat' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>HUMAS</button>
                        <button id='kwu' value='Kewirausahaan' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>KWU</button>
                        <button id='litbang' value='Penelitian dan Pengembangan' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>LITBANG</button>
                        <button id='mediatek' value='Media dan Teknologi' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>MEDIATEK</button>
                        <button id='psdm' value='Pengembangan Sumber Daya Manusia' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>PSDM</button>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 dark:bg-gray-900 py-20'>
                <div className='max-w-7xl flex flex-wrap mx-auto justify-center gap-10'>
                    <ViewStaff />
                </div>
            </div>
        </div>
    )
}

export default Staff
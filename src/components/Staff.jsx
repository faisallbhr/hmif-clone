import React, { useEffect, useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'


const Staff = () => {
    const url = 'https://api-developer.hmifunej.id/api/getStaff'
    const imageUrl = 'https://api-developer.hmifunej.id/assets/upload/staff'
    const [staff, setStaff] = useState([])
    const [pickStaff, setPickStaff] = useState([])
    const [periodYear, setPeriodYear] = useState([])

    const getDataStaff = async ()=> {
        const response = await fetch(url)
        const dataStaff = await response.json()
        setStaff(dataStaff.data)
    }

    useEffect(()=> {
        getDataStaff()
    }, [])

    const [btnState, setBtnState] = useState(false)
    const [name, setName] = useState('')

    // SELECT PERIODE
    const selectPeriod = (e) => {
        setPeriodYear(staff.filter((q) => q.period_year.split('/')[1] === e.target.value))
    }
    
    // SELECT DIVISION
    const handleBtn = (e) => {
        setPickStaff(periodYear.filter(q => q.role === e.target.name))
        setName(e.target.name)
        if (pickStaff[0].role !== e.target.name){
            setBtnState(true)
        }else{
            setBtnState(btnState=>!btnState)
        }
    }
    
    // SET SELECT CLASS DIVISION BUTTON
    useEffect(()=>{
        const division = document.getElementsByClassName('division')
        const cek = document.getElementsByName(`${name}`)
        if(btnState===true){
            for (let i=0; i<division.length;i++){
                const accept = division[i].name //mengambil name dari class divisi yang dipilih
                if(name===accept){
                    cek[0].classList.add('div-active')
                }else{
                    division[i].classList.remove('div-active')
                }
            }
        }else{
            for (let i=0; i<division.length;i++){
                const accept = division[i].name //mengambil name dari class divisi yang dipilih
                if(name===accept){
                    cek[0].classList.remove('div-active')
                }
            }
        }
    }, [btnState, name])

    const [search, setSearch] = useState('')
    console.log(search)
    const ViewStaff = ()=> {
        if (btnState===false){
            return periodYear
            // eslint-disable-next-line
            .filter((person)=>{
                if(search===''){
                    return person
                }else if(person.name.toLowerCase().includes(search.toLowerCase())){
                    return person
                }
            })
            .map((person, i) => {
                return(
                    <div className='relative items-center border border-gray-300 dark:border-gray-700 text-center rounded-lg p-4 w-96 h-fit' key={i}>
                        <img className='rounded-lg' src={`${imageUrl}/${person.image}`} alt="" />
                        <div className='py-4 font-bold text-xl text-gray-700 dark:text-white'>{person.name}</div>
                        <div className='w-fit mx-auto mb-4 text-xs bg-green-500 rounded-full font-bold py-1 px-2.5'>{person.role}</div>
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
            return periodYear
            // eslint-disable-next-line
            .filter((person)=>{
                if(search===''){
                    return person
                }else if(person.name.toLowerCase().includes(search.toLowerCase())){
                    return person
                }
            })
            .map((person, i) => {
                if(person.role === name){
                    return(
                        <div className='relative items-center border border-gray-300 dark:border-gray-700 text-center rounded-lg p-4 w-96 h-fit' key={i}>
                        <img className='rounded-lg' src={`${imageUrl}/${person.image}`} alt="" />
                        <div className='py-4 font-bold text-xl text-gray-700 dark:text-white'>{person.name}</div>
                        <div className='w-fit mx-auto mb-4 text-xs bg-green-500 rounded-full font-bold py-1 px-2.5'>{person.role}</div>
                        <div className='text-gray-500 dark:text-gray-300'>{person.name_role}</div>
                        <div className='flex justify-center gap-4 pt-4'>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiLinkedin className='w-5 h-5'/></a>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiInstagram className='w-5 h-5'/></a>
                            <a href={person.li_link} target='_blank' rel="noreferrer" className='bg-gray-600 dark:bg-gray-300 dark:text-gray-800 p-[2px] rounded-md border border-gray-300'><FiGithub className='w-5 h-5'/></a>
                        </div>
                    </div>
                    )
                }
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
                <form action="" className='max-w-4xl mx-auto px-4 pb-4'>
                    <label htmlFor=""></label>
                    <select name="period" id="period" onChange={selectPeriod} className=' w-full rounded-lg border border-green-600 bg-transparent font-semibold text-green-600'>
                        <option value="2023">HMIF - 2022/2023</option>
                        <option value="2022">KARSA ABYAKTA - 2021/2022</option>
                        <option value="2021">HMIF - 2020/2021</option>
                        <option value="2020">HMIF - 2019/2020</option>
                    </select>
                </form>
                <div className='max-w-4xl mx-auto px-4 pb-10'>
                    <div className='flex flex-wrap justify-center border border-green-600 rounded-lg font-semibold text-green-600 text-sm '>
                        <button name='Badan Pengurus Inti' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>BPI</button>
                        <button name='Hubungan Masyarakat' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>HUMAS</button>
                        <button name='Kewirausahaan' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>KWU</button>
                        <button name='Penelitian dan Pengembangan' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>LITBANG</button>
                        <button name='Media dan Teknologi' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>MEDIATEK</button>
                        <button name='Pengembangan Sumber Daya Mahasiswa' onClick={handleBtn}  className='division md:mx-6 rounded-md cursor-pointer hover:text-white hover:bg-green-600 py-4 px-4 my-1'>PSDM</button>
                    </div>
                    <input onChange={(e)=> setSearch(e.target.value)} placeholder='Cari pengurus...' className='text-black mt-10 px-2 rounded-md' type="text" />
                </div>
            </div>

            <div className='bg-gray-100 dark:bg-gray-900 py-20'>
                <div className='max-w-7xl min-h-screen flex flex-wrap mx-auto justify-center gap-10'>
                    <ViewStaff />
                </div>
            </div>
        </div>
    )
}

export default Staff
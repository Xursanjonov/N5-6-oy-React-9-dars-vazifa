import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/dev-img.jpg'

const Header = () => {
    return (
        <header className='top-0 sticky z-50 bg-gray-950'>
            <nav className='max-w-[1480px] mx-auto py-4 flex items-center justify-between'>
                <Link to={`/`} className='text-2xl font-bold flex items-center gap-2' >
                    <i className="fa-brands fa-youtube text-3xl mt-1 text-red-500"></i>
                    <span>Youtube</span>
                </Link>
                <div className="flex items-center justify-center gap-5">
                    <div className="w-[530px] h-[35px] flex items-center gap-2 bg-[#0009] rounded-[40px]">
                        <input className='w-[90%] h-[100%] ps-5 pe-2 font-semibold text-gray-100 rounded-s-[40px] border-gray-500'
                            type="search" placeholder="Qidiruv" />
                        <i className="cursor-pointer w-[35px] flex items-center justify-center fa-solid fa-search text-md text-gray-400"></i>
                    </div>
                    <button className='w-[35px] h-[35px] p-1 rounded-full bg-[#0009] text-gray-400'>
                        <i className="fa-solid fa-microphone text-md"></i>
                    </button>
                </div>
                <div className="flex items-center justify-center gap-8">
                    <i className="cursor-pointer text-xl fa-solid fa-video text-gray-400"></i>
                    <div className="cursor-pointer flex items-center text-gray-400">
                        <i className="text-xl fa-regular fa-bell"></i>
                        <sup className='font-bold'>1</sup>
                    </div>
                    <img className='cursor-pointer w-[40px] h-[40px] p-[2px] rounded-full object-cover border-2 border-gray-600'
                        src={profile} />
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function MainBanner() {
  return (
    <div>
        
            <div className='2xl:flex 2xl:justify-center md:flex md:justify-center sm:block'>
                    <div className='mx-12 2xl:mt-5 md:mt-0'>
                         <img src="/./assets/logo.png" alt="logo" className='inline-block' />
                    </div>
                    <div className='mx-12 sm:text-center'>
                        <h2 className='text-2xl mt-4 text-white 2xl:text-6xl  md:text-3xl 2xl:mt-5'>گالری طلای علیزاده</h2>
                        <h2 className='text-2xl mt-4 text-white 2xl:text-6xl  md:text-3xl 2xl:mt-5'>فروش انواع طلا</h2>
                        <h2 className='text-2xl mt-4 text-white 2xl:text-6xl  md:text-3xl 2xl:mt-5'>ارسال به سراسر کشور</h2>
                    </div>
                </div>
                <div className='text-center mt-20'>
                      <button className='w-40 h-14 text-gray-400 rounded-md border-2
                       border-gray-400 hover:bg-amber-400 hover:text-white
                        hover:border-amber-400 transition'>اطلاعات بیشتر</button>
                </div>  
    </div>
  )
}

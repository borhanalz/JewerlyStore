import React from 'react'
import CategoryBanner from '../../Components/CategoryBanners/CategoryBanner'

export default function Banners() {
  return (
    <>
           <div className='mt-28'>
           <div className="row">
                <CategoryBanner imgaddress='bannerimg1.png'/>
               <CategoryBanner imgaddress='bannerimg2.png'/>
               <CategoryBanner imgaddress='bannerimg3.png'/>
            </div>
           </div>
    </>
        )
}

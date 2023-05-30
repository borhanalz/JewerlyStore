import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../ProductSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../../../Components/Product/Product'
import 'swiper/css';
import 'swiper/css/autoplay';

export default function TopNewProductsSlider() {

    const Products=useSelector(selectAllProducts);
    const FilterTopNew=Products.filter((product)=>{
        return product.filter=="جدیدترین"
    })
    const IteritProducts = FilterTopNew.map((product)=>{
        return <SwiperSlide  key={product.id} className='flex justify-center'>
               <Product id={product.id} name={product.name} price={product.price} img={product.img}/>

        </SwiperSlide>

    })

  return (
    <>
      <div>
          <b className='text-2xl inline-block mt-40 2xl:mt-20 md:mt-20 xl:mt-20'>جدیدترین</b>
        </div>
                  <Swiper
  autoplay={true}
  spaceBetween={30}
  slidesPerView={4}
  className='py-2 px-2 text-center mt-5'
  scrollbar={{ draggable: true }}
  breakpoints={{
    1880:{
      width:1500,
      slidesPerView:5
    },
   500:{
    width:500,
    slidesPerView:2
   },
   312:{
    width:312,
    slidesPerView:1
   },
   280:{
    width:280,
    slidesPerView:1
   }
  }} >
            {IteritProducts}
  </Swiper>
    </>
  )
}

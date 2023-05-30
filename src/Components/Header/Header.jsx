import React from 'react'
import BigNav from './BigNav'
import TinyNav from './TinyNav'
import MainBanner from '../MainBanner'
import { useSelector } from 'react-redux'

export default function Header() {

  const Data = useSelector(state=>state.cartSlice.carts);

  const CartsCount= []
  const SumCarts = Data.map((product)=>{
    CartsCount.push(product.product_count)
  })
  const GetNumberOfCarts=CartsCount.reduce((accumulator,currentVal)=>{
    return accumulator+currentVal
  },0);

  return (
    <header>
      <BigNav GetNumberOfCarts={GetNumberOfCarts}/>
      <TinyNav GetNumberOfCarts={GetNumberOfCarts}/>
      <div className='bg-blue-950 w-full div_banner'>
              <MainBanner/>
      </div>
    </header>
  )
}

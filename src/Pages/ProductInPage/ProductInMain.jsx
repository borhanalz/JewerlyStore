import React from 'react'
import ProductIn from './ProductIn'
import { useDispatch } from 'react-redux'
import { RequestToGetData } from '../HomePage/ProductSlice';

export default function ProductInMain() {
    const dispatch =useDispatch();
    dispatch(RequestToGetData())
  return (
    <>
        <ProductIn/>
    </>
  )
}

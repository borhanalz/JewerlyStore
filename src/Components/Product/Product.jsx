import React from 'react'
import { Link } from 'react-router-dom'
import CustomNumeralNumericFormat from '../Price/Price'

export default function Product({name,price,img,id}) {
  return (
    <Link to={`/./product/${id}`}>
  <div className='bg-white rounded-md cursor-pointer w-64 h-80 shadow-xl px-2'>
    <div className='text-center w-full h-36 pt-4'>
      <img src={`/./assets/${img}`} className="w-50 inline-block" />
    </div>
    <div className='mt-5 w-full h-8'>
      <h3>{name}</h3>
    </div>
    <div>
        <div className='font-bold mt-5 p-2 text-left'>
            <p className='text-amber-400 inline-block text-sm'>
            <CustomNumeralNumericFormat
                    value={price}
                    thousandSeparator=","
                    suffix={` تومان `}
                    />
            </p>
            <div className='float-right bg-blue-950 py-1 px-3 rounded-md'>
              <p className='text-sm text-amber-400'>موجود</p>
            </div>
        </div>
    </div>
</div>
    </Link>
  )
}

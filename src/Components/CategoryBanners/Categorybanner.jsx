import React from 'react'

export default function ({imgaddress}) {
  return (
    <div className='col-xxl-4 col-md-4 col-xl-4 col-12'>
        <img src={`./assets/${imgaddress}`} className='cursor-pointer'/>
    </div>
  )
}

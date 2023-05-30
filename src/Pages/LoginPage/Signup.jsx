import React from 'react'
import { useState } from 'react'

export default function ({HandleLoginStatus}) {

    const [valueOfUsername, setvalueOfUsername] = useState('')
    const [valueOfPassword, setvalueOfPassword] = useState('')
    const [valueOfEmail, setvalueOfEmail] = useState('')

  return (
    <div className='mt-64 inline-block text-center border-1 text-center shadow-md w-96 py-3 rounded-md'>
    <div className='w-64 inline-block'>
    <div className='text-center'>
        <img src="./assets/logo.png" alt="logo" className=' w-32 inline-block' />
      </div>

      <div className='text-right mt-5'>
           <p className='text-xs text-gray-500'>
             لطفا برای ثبت نام فرم زیر را پر کنید
           </p>
      </div>
      <div className='mt-4'>
      <input type="text" placeholder='نام کاربری' value={valueOfUsername} onChange={(e)=>setvalueOfUsername(e.target.value)} className="outline-none w-full border-b-2 h-7 text-sm px-2" />
      </div>
      <div className='mt-4'>
      <input type="email" placeholder='ایمیل' value={valueOfEmail} onChange={(e)=>setvalueOfEmail(e.target.value)} className="outline-none w-full border-b-2 h-7 text-sm px-2" />
      </div>
      <div>
        <input type="password" placeholder='رمز عبور' value={valueOfPassword} onChange={(e)=>setvalueOfPassword(e.target.value)} className="text-sm mt-4 outline-none w-full border-b-2 h-7 px-2" />
      </div>
      <div className='mt-3 text-right'>
       <p className='text-xs text-red-500'>
       {valueOfPassword=='' && 'مشخصات خود را به درستی پیدا کنید'|| valueOfUsername=='' && 'مشخصات خود را به درستی پیدا کنید'}
       </p>
      </div>
      <div>
       <button className='mt-4 transition hover:bg-blue-900 bg-blue-950 text-white rounded-md w-full h-11'>
         ثبت نام
       </button>
       <div className='mt-2 text-right'>
         <p onClick={()=>HandleLoginStatus(true)} className='text-xs text-blue-900 cursor-pointer'>بازگشت به ورود</p>
       </div>
      </div>
    </div>
 </div>
  )
}

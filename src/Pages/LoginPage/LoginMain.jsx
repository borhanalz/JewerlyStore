import React, { useState } from 'react'
import SignIn from './SignIn'
import Signup from './Signup'

export default function LoginMain() {

  const [loginStatus, setloginStatus] = useState(true);

 const HandleLoginStatus=(type)=>{
      setloginStatus(type)
  }

  return (
    <div className='container'>
          <div className='text-center'>
            {loginStatus ? <SignIn HandleLoginStatus={HandleLoginStatus}/> :<Signup HandleLoginStatus={HandleLoginStatus}/>}
          </div>
    </div>
  )
}

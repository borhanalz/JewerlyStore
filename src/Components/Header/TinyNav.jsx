import React,{useState} from 'react'
import MenuBar from './MenuBar'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TinyNav({GetNumberOfCarts}) {

  const [toggle, settoggle] = useState(false)

  const HndleToggleMenuBar = (typeOfToggle)=>{
      switch (typeOfToggle) {
        case "open":
          settoggle(true)
          break;
        case "close":
          settoggle(false)
          break;
        default:
          break;
      }
  }
  return (
    <nav className='tiny_nav w-full bg-blue-950 h-30 pt-3'>
    <div className='mx-4' onClick={()=>HndleToggleMenuBar("open")}>
        <FontAwesomeIcon className='text-gray-400 text-5xl' icon={faBars}/>
    </div>
    {toggle&&<MenuBar GetNumberOfCarts={GetNumberOfCarts} HndleToggleMenuBar={HndleToggleMenuBar}/>}
    </nav>
  )
}

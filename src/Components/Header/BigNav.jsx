import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars,faCircleUser,faCartShopping, faHome, faSearch} from '@fortawesome/free-solid-svg-icons' 
import CategorySub from './CategorySub'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function BigNav({GetNumberOfCarts}) {

  const [subheaderStatus, setsubheaderStatus] = useState(false);

  

  return (
    <nav className='big_nav w-full bg-blue-950 h-40 pt-5'>
     <div className="container">
       <ul className='p-0 text-center'>
         <Link to='/'><li className='list-none mx-3 inline-block cursor-pointer text-white'>
             <span className='text-2xl hover:text-amber-400'> <FontAwesomeIcon className='text-md mx-2' icon={faHome}/>صفحه اصلی</span>
          </li></Link>
          <li className='list-none mx-3 inline-block cursor-pointer text-white' onMouseEnter={()=>setsubheaderStatus(true)} onMouseLeave={()=>setsubheaderStatus(false)}>
             <span className='text-2xl hover:text-amber-400 relative py-3'>
               <FontAwesomeIcon className='mx-2' icon={faBars}/> 
                دسته بندی
                {subheaderStatus &&<CategorySub/>}
             </span>
          </li>
          <li className='list-none mx-3 inline-block cursor-pointer text-white'>
             <span className='text-2xl hover:text-amber-400'>ارتباط با ما</span>
          </li>
          <li className='list-none mx-3 inline-block cursor-pointer text-white'>
             <span className='text-2xl hover:text-amber-400'>درباره ما</span>
          </li>
          <li className='list-none mx-3 inline-block cursor-pointer text-white'>
            <Link to='/search'><FontAwesomeIcon className='text-2xl mx-2 hover:text-amber-400' icon={faSearch}/></Link>
            <Link to='/login'><FontAwesomeIcon className='text-2xl mx-2 hover:text-amber-400' icon={faCircleUser}/> </Link>
            <Link to='/cart' className=' relative'>
              <FontAwesomeIcon className='text-2xl mx-2 hover:text-amber-400' icon={faCartShopping}/> 
              <div className='bg-amber-400 absolute w-4 top-1 left-0 rounded-sm shadow-md text-xs h-4 text-white font-bold'>{GetNumberOfCarts}</div>
             </Link>
          </li>
       </ul>
     </div>
    </nav>
  )
}

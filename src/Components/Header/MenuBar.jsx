import React, { Component } from 'react'
import { faAddressCard, faBars, faCartShopping, faHouse, faPhone, faPlus, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {

    HndleOpenSub = ()=>{
        $('.submenu_tinynav').slideToggle();
    }

    
  
  render() {
    return (
    <div className='menu_bar w-80 bg-white h-screen absolute top-0 animate__animated animate__slideInRight'>
        <div className='mt-3 mb-4'>
          <div className='float-left mt-4 mx-3' onClick={()=>this.props.HndleToggleMenuBar("close")}>
            <FontAwesomeIcon icon={faXmark} className='text-xl'/>
          </div>
            <div>
              <img src="/./assets/logo.png" alt="logo" className='w-25 mx-3' />
            </div>
        </div>
        <hr />
        <ul className='p-0'>
        <Link to='/'><li className='text-xl mt-5'><p> <FontAwesomeIcon icon={faHouse} className='text-sm mx-2'/>صفحه اصلی</p></li></Link>
              <li className='text-xl mt-5'>
                <p onClick={this.HndleOpenSub}> <FontAwesomeIcon icon={faPlus} className='text-sm mx-2'/> دسته بندی</p>
                <div className='submenu_tinynav hidden'>
                  <ul className='p-0'>
                  <li className='mt-3 text-sm font-light hover:text-amber-400'>- گردنبند</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- انگشتر</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- گوشواره</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- سرویس های عروسی</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- دستبند</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- پابند</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- ست مردانه</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- نیم ست زنانه</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- کادویی</li>
                      <li className='mt-3 text-sm font-light hover:text-amber-400'>- پلاک</li>
                  </ul>
                </div>
              </li>
              <li className='text-xl mt-5'><p> <FontAwesomeIcon icon={faPhone} className='text-sm mx-2'/> ارتباط با ما</p></li>
              <li className='text-xl mt-5'><p> <FontAwesomeIcon icon={faAddressCard} className='text-sm mx-2'/> درباره ما</p></li>
              <Link to='/login'><li className='text-xl mt-5'><p> <FontAwesomeIcon icon={faUser} className='text-sm mx-2'/>ثبت نام / ورود</p></li></Link>
              <li className='text-xl mt-5'>
              <Link to='/cart' className=' relative'>
              <FontAwesomeIcon className='text-2xl mx-2 hover:text-amber-400' icon={faCartShopping}/> 
              <div className='bg-amber-400 absolute w-5 top-3 text-center left-0 rounded-sm shadow-md text-xs h-5 text-white font-bold'>{this.props.GetNumberOfCarts}</div>
             </Link></li>
        </ul>
    </div>
    )
  }
}


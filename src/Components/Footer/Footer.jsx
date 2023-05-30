import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTelegram,faInstagram,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-blue-950 w-full h-60 mt-5'>
                <div className='text-center'>
                  <div className="logo"><img src="./assets/logo.png" alt="BA Gold Gallery" className='inline-block w-28 mt-3' /></div>
                </div>
                <div>
                  <ul className='p-0 text-center mt-4'>
                    <li className='inline-block mx-2 cursor-pointer'><FontAwesomeIcon className='text-2xl text-amber-300' icon={faTelegram}/></li>
                    <li className='inline-block mx-2 cursor-pointer'><FontAwesomeIcon className='text-2xl text-amber-300' icon={faInstagram}/></li>
                    <li className='inline-block mx-2 cursor-pointer'><FontAwesomeIcon className='text-2xl text-amber-300' icon={faTwitter}/></li>
                    <li className='inline-block mx-2 cursor-pointer'><FontAwesomeIcon className='text-2xl text-amber-300' icon={faLinkedin}/></li>
                  </ul>
                </div>
                <div className='text-center mt-3'>
                  <h4 className='text-gray-500 text-sm'>طراحی و توسعه داده شده توسط Borhan Alizade</h4>
                </div>
    </footer>
  )
}

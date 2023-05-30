import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

export default function Layout({children}) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    </>
  )
}

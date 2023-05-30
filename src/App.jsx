import { useState } from 'react'
import Home from './Pages/HomePage/Home'
import {Route, Routes} from 'react-router-dom'
import Carts from './Pages/Cart/Carts'
import Search from './Pages/SearchPage/Search'
import ProductInMain from './Pages/ProductInPage/ProductInMain'
import LoginMain from './Pages/LoginPage/LoginMain'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

function App() {

  return (
    <Routes>
      <>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/cart' element={<Carts/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/login' element={<LoginMain/>}/>
        <Route path='/product/:slug' element={<ProductInMain/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </>
    </Routes>
  )
}

export default App

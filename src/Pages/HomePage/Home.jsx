import React from 'react'
import Layout from '../../Components/Layout/Layout'
import MainBanner from '../../Components/MainBanner'
import { useDispatch, useSelector } from 'react-redux'
import ProductSlice, { RequestToGetData} from './ProductSlice'
import BestSalesSlider from './Sliders/BestSalesSlider'
import TopNewProductsSlider from './Sliders/TopNewProductsSlider'
import Banners from './Banners'
import OurSuggestionSalesSlider from './Sliders/OurSuggestionSalesSlider'
import ProductIn from '../ProductInPage/ProductIn'
import Properties from './Properties/Properties'
export default function Home() {
  const dispatch = useDispatch()
  dispatch(RequestToGetData());

  return (
    <Layout>
              <div className="container">
                  <BestSalesSlider/>
                  <TopNewProductsSlider/>
                  <Banners/>
                  <OurSuggestionSalesSlider/>
                  <Properties/>
              </div>    
        
    </Layout>
  )
}

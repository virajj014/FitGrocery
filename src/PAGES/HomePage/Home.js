import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <Product_Sidebar/>
        Home</div>
  )
}

export default Home
import React from 'react'
import Banner from '../Components/Banner'
import CountDown from '../Components/CountDown'
import ProductCard from '../Components/ProductCard'
import CataGories from '../Components/CataGories'

const Home = () => {
  return (
    <div>
        <Banner/>
        <CountDown/>
         <ProductCard/>
         <CataGories/>
      
    </div>
  )
}

export default Home

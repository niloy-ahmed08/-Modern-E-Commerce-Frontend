import React from 'react'
import Banner from '../Components/Banner'
import CountDown from '../Components/CountDown'
import ProductCard from '../Components/ProductCard'
import CataGories from '../Components/CataGories'
import CustmPcard from '../Components/CustmPcard'
import SellinghProducts from '../Components/SellinghProducts'
import SounBox from '../Components/SounBox'
import ExploreProducts from '../Components/ExploreProducts'
import NewArival from '../Components/NewArival'
import LoginExclusive from '../Components/LoginExclusive'

const Home = () => {
  return (
    <div>
        <Banner/>
        <CountDown/>
         <ProductCard/>
         <CataGories/>
          <SellinghProducts/>
          <SounBox/>
          <ExploreProducts/>
          <NewArival/>
          <LoginExclusive/>
      
    </div>
  )
}

export default Home

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
import SingUp from '../Components/SingUp'
import CustomerService from '../Components/CustomerService'
import Shop from './Shop'
 

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
            <Shop/>
          <NewArival/>
          <CustomerService/>
          <LoginExclusive/>
          <SingUp/>
      
    </div>
  )
}

export default Home

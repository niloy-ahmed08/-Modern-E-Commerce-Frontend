
import  Container  from './Container'
import React from 'react'
import remotes from '../assets/Remotecontrols.png'
import chaiars from '../assets/chaiar.png'
import CustmPcard from './CustmPcard'
 import keyboards from '../assets/keyboard.png'
 import ledsmonitor from '../assets/led.png'

 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const ProductCard = () => {


  
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className=' cursor-pointer  h-11.5 w-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-20 right-6 '
          // style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        >
          <FaArrowRightLong className=' ' />
        </div>
  
      );
    }
  
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className='cursor-pointer h-11.5 w-11.5 rounded-full flex items-center justify-center bg-[#F5F5F5]  absolute -top-20 right-22'
          onClick={onClick}
        >
          <FaArrowLeftLong className=' ' />
  
        </div>
      );
    }
  

  
         var settings = {
    
          dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
         };
  


  return (
    <div className='py-10  '>
        <Container>
       
           <div className=' '>


                    <Slider {...settings}>
                 <div>

               <CustmPcard
               imgsrc={remotes}
               produtname='S-Series Comfort Chair '
               parsents='- 56'
               price='110'
               discauntprice='$231'
               
               />
               </div>


               <div>

               <CustmPcard
               imgsrc={chaiars}
               produtname='S-Series Comfort Chair '
               parsents='- 56'
               price='110'
               discauntprice='$231'
               
               />
               </div>


               <div>

               <CustmPcard
               imgsrc={ledsmonitor}
               produtname='S-Series Comfort Chair '
               parsents='- 56'
               price='110'
               discauntprice='$231'
          
               
               />

               </div>
                <div>

               <CustmPcard
               imgsrc={remotes}
               produtname='S-Series Comfort Chair '
               parsents='- 56'
               price='110'
               discauntprice='$231'
               
               />
               </div>


               <div>

               <CustmPcard
               imgsrc={keyboards}
               produtname='S-Series Comfort Chair '
               parsents='- 56'
               price='110'
               discauntprice='$231'
               
               />
               </div>
                 </Slider>


           </div>
              <button className=' py-4 px-12 justify-center bg-primary text-white  text-2xl block mx-auto mt-15'>View All Products</button>
               <div className='border-b border-gray-700 mt-10'>
            </div>
                 

        </Container>
      
    </div>
  )
}

export default ProductCard

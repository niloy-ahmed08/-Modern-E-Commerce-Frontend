import React, { lazy, Suspense } from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import imgesbnner from '../assets/bannerimg.png'
import imgtwob from '../assets/phone.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

const Slider = SlickSlider.default || SlickSlider;

const Banner = () => {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
    return (
        <div className='pb-35'>
            <div className='container mx-auto'>
               <div className='flex gap-12 items-center'>

               
                <div className='w-[20%] border-r pr-5'>

                    <ul className='py-10 space-y-4'>
                        <li className='flex  justify-between items-center'>Woman’s Fashion <FaArrowRightFromBracket /> </li>
                        <li className='flex  justify-between  items-center'>Men’s Fashion <FaArrowRightFromBracket /> </li>
                        <li className='flex  justify-between  items-center'>Electronics<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between   items-center'>Home & Lifestyle<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between  items-center'>Medicine<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between  items-center'>Sports & Outdoor<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between  items-center'>Baby’s & Toys<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between  items-center'>Groceries & Pets<FaArrowRightFromBracket /></li>
                        <li className='flex  justify-between  items-center'>Health & Beauty<FaArrowRightFromBracket /></li>
                    </ul>

                </div>

                <div className='w-[80%] mt-10'>

                            
                    <Slider {...settings} className=''>
                        <div>
                            <img src={imgtwob} alt="" />
                        </div>
                         <div>
                            <img src={imgesbnner} alt="" />
                        </div>
                         <div>
                            <img src={imgesbnner} alt="" />
                        </div>


                    </Slider>

                </div>

                </div>

            </div>

        </div>
    )
}

export default Banner

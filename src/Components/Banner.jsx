import React, { lazy, Suspense, useRef } from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import imgesbnner from '../assets/iphonemain.png'
import imgtwob from '../assets/samsunghmain.png'
 import pixelphone from '../assets/goglemain.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
const Slider = SlickSlider.default || SlickSlider;

const Banner = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
       appendDots: dots => (
      <div
    
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
     className='w-3.5 h-3.5 bg-gray-400 rounded-full absolute bottom-8 translate-x-8 border-2 border-amber-50'
      >
        {}
      </div>
    )
  
  };
    
    return (
        <div className='pb-30'>
            <div className='container mx-auto'>
               <div className='flex gap-12 items-center'>

               
                <div className='w-[20%] border-r pr-5 pb-13'>

                    <ul className='py-20 space-y-4'>
                        <li className='flex  justify-between items-center'>Woman’s Fashion <FaArrowRightFromBracket className='cursor-pointer'/> </li>
                        <li className='flex  justify-between  items-center'>Men’s Fashion <FaArrowRightFromBracket className='cursor-pointer' /> </li>
                        <li className='flex  justify-between  items-center'>Electronics</li>
                        <li className='flex  justify-between   items-center'>Home & Lifestyle</li>
                        <li className='flex  justify-between  items-center'>Medicine</li>
                        <li className='flex  justify-between  items-center'>Sports & Outdoor</li>
                        <li className='flex  justify-between  items-center'>Baby’s & Toys</li>
                        <li className='flex  justify-between  items-center'>Groceries & Pets</li>
                        <li className='flex  justify-between  items-center'>Health & Beauty</li>
                    </ul>

                </div>

                <div className='w-[80%] mt-10 relative'>

                            
                    <Slider ref={sliderRef} {...settings} className=''>
                        <div>
                            <img src={imgtwob} alt="" />
                        </div>
                         <div>
                            <img src={pixelphone} alt="" />
                        </div>
                         <div>
                            <img src={imgesbnner} alt="" />
                        </div>
                    </Slider>

                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white'
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white'
                    >
                        ❯
                    </button>

                </div>

                </div>

            </div>

        </div>
    )
}

export default Banner

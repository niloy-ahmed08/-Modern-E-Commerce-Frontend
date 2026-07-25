import Card from './Card'
import  Container  from './Container'
import React from 'react'
import remote from '../assets/Remotecontrols.png'
import keybords from '../assets/keyboard.png'
import SlickSlider from "react-slick";
import chaiars from '../assets/chaiar.png'



const ProductCard = () => {
  
  // const Slider = SlickSlider.default || SlickSlider;
  //    const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4
  // };

  return (
    <div className='py-10  '>
        <Container>
       
           <div className='flex justify-between gap-9 items-center '>

{/* 
               <Slider {...settings}> */}
          <div>
            <Card
            remote={remote}
            brandnicn='HAVIT HV-G92 Gamepad'
            price='120'
            discaunt='160'
            
            />
          </div>
          
          <div>
            <Card
            remote={keybords}
            brandnicn='AK-900 Wired Keyboard'
            price='960'
            discaunt='1140'
            />
            
          </div>

             <div>
                <Card
                remote={chaiars}
                 brandnicn='S-Series Comfort Chair '
                 price='370'
                 discaunt='400'
                
                />

             </div>


             {/* </Slider> */}

           </div>
              <button className='pb-10 py-4 px-12 justify-center bg-primary text-white  text-2xl block mx-auto mt-15'>View All Products</button>
               <div className='border-b border-gray-700 mt-10'>
            </div>
                 

        </Container>
      
    </div>
  )
}

export default ProductCard

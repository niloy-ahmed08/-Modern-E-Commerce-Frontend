import React from 'react'
import BreadCump from '../Components/BreadCump'
import NewCartDettls from '../Components/NewCartDettls'
import { useSelector } from 'react-redux'





const NewCart = () => {

  
      const cart = useSelector(state=>state.products.addtocart)


  return (
    <div>
       <div className='py-20'>
            <div className='container'>
                <BreadCump />

                <div className='flex justify-between items-center rounded-sm  shadow-sm py-6 px-10 mt-20'>
                    <h1 className='text-[16px] leading-6 font-normal'>Product</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Price</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Quantity</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Subtotal</h1>
                </div>

                {
                    cart.map((Items)=>{
                        return <NewCartDettls
                    
                        imgsrcn={Items.thumbnail}
                        titlen={Items.title}
                        pricen={Items.price}
                        subtototaln={Items.price}
                        
                        />
                    })
                }

                

                  {/* {
                    data.map((item)=>{
                        return 
                        <NewCartDettls
                        imgsrc={item.images}
                        title={item.titel}
                        price={item.price}
                        subtototal={item.price}
                        />
                    })
                  } */}

                     
               
              

            </div>
        </div>
    </div>
  )
}

export default NewCart

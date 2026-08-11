import BreadCump from '../Components/BreadCump'
import React from 'react'
import CartDettels from '../Components/CartDettels'
import { useSelector } from 'react-redux'



const Cart = () => {


       const data = useSelector(star=>star.products.cart)



      console.log(data)


    return (
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
                        data.map((item)=>{
                         return <CartDettels
                               imgsrc={item.images}
                               title={item.title}
                               price={item.price}
                               subtototal={item.price}
                         />
                        })
                     }
               
               
              

            </div>
        </div>
    )
}

export default Cart

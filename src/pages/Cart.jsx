import BreadCump from '../Components/BreadCump'
import React from 'react'
import CartDettels from '../Components/CartDettels'
import { useSelector } from 'react-redux'




const Cart = () => {


     


       const datacart = useSelector(state => state.products.cart)
  
       

    return (
        <div className='py-20'>
            <div className='container'>
                <BreadCump />

                  <h1 className='text-3xl font-bold font-inter text-gray-900 mb-8 text-center'>Shopping Cart</h1>

                  {
                    datacart.length === 0 ? (   <div className='text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100'>
                    <h2 className='text-2xl font-semibold text-gray-600'>Your cart is empty</h2>
                    <p className='text-gray-400 mt-2'>Looks like you haven't added anything yet.</p>
                </div>):(




            
                  <>

                <div className='flex justify-between items-center rounded-sm  shadow-sm py-6 px-10 mt-20'>
                    <h1 className='text-[16px] leading-6 font-normal'>Product</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Price</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Quantity</h1>
                    <h1 className='text-[16px] leading-6 font-normal'>Subtotal</h1>
                </div>
                   

                     {
                        datacart.map((item)=>{
                         return <CartDettels
                             key={item.id}
                               quan={item.quan}
                               id={item.id}
                               imgsrc={item.images}
                               title={item.title}
                               price={item.price}
                               subtototal={((item.price)*(item.quan)).toFixed(2)}
                               
                         />
                        })
                     }
                   
               </>
               
              
                  )}


            </div>
        </div>
    )
}

export default Cart

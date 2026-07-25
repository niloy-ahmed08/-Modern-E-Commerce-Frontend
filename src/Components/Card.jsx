import React from 'react'
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { Rate } from 'antd';


const Card = ({remote,brandnicn,price,discaunt}) => {
  return (
    <>
       

             <div className='w-67.5   group overflow-hidden'>
              <div className=' relative '>
                <span className=' absolute top-2 left-0 border bg-red-600 rounded-sm
                 text-white text-sm px-2  h-6 py-1'>
                    - 40%
                </span>
                <div className='flex gap-2 '>

                <div className='pr-8 ml-8 mt-6'>
                    <img src={remote} alt="" />
                </div>
                <div>
                  <div>
                    <CiHeart className='text-4xl' />
                    <LuEye className='text-4xl mt-6.5' />
                  </div>
                </div>
                </div>
                 </div>
                <button className='  bg-black text-white w-full
                  opacity-0 group-hover:opacity-100  ease-linear duration-400'>Add to cart</button>
                 <div className='bg-white pt-5'>
                <h1 className=' font-medium text-sm'>{brandnicn}</h1>
                 <div className='flex gap-2 mt-2'>
                    <h1 className='text-red-500'>${price}</h1>
                    <h2 className='text-gray-500'>${discaunt}</h2>
                 </div>
                     <div className='flex gap-2'>
                     <Rate allowHalf defaultValue={5} />
                      <span className=' '>(88)</span>
                     </div>

                  
                 </div>

             
             </div>


      
    </>
  )
}

export default Card

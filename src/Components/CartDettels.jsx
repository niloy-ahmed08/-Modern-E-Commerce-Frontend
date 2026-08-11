import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiChevronUp } from "react-icons/fi";



const CartDettels = ({imgsrc,title,price,subtototal}) => {
  return (
    <div>
        <div className="container">

         <div className='flex justify-between items-center   shadow-sm py-6 px-10 mt-10 rounded-sm'>

            <div className='flex gap-5 w-[32%] items-center'>
                <img className='size-13.5' src={imgsrc} alt="" />
                <h1>{title}</h1>
            </div>

            <div className='w-[30%] '>
                <h1 className='w-10.25'>$({price})</h1>
            </div>

           <div className='w-[34%]'>
            <div className='border px-3 py-2 rounded-sm flex items-center gap-2 w-18  '>

                    <p>0</p>
                    <div>
                    <FaAngleUp  />
                     <FaAngleDown />

                    </div>

            </div>
               </div>

            <h1>$({subtototal})</h1>

         </div>

        </div>
      
    </div>
  )
}

export default CartDettels

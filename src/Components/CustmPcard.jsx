import React from 'react'
import {  Rate } from 'antd';
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const CustmPcard = ({ parsents, imgsrc, produtname, ratemathmathics, price, discauntprice, className,classname,flexess,rating }) => {
    return (
        <>

            <div className='w-67.5  group'>

                <div className=' relative bg-[#F5F5F5] pt-11 pl-0  overflow-hidden h-62.5'>
                    <span className=' absolute top-3 left-3 w-13.75  py-2 px-3  rounded-sm bg-primary text-white'>{parsents}</span>
                    <img src={imgsrc} alt="" className=' mx-auto ' />
                    <div className=' absolute top-3 right-3  space-y-2'>
                        <div className='  bg-white w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                            <CiHeart className='' />
                        </div>
                        <div className='w-8.5 h-8.5 rounded-full flex items-center justify-center bg-white'>
                            <LuEye className='' />
                        </div>
                    </div>
                    <button className='cursor-pointer absolute -bottom-11 group-hover:bottom-0 duration-200 ease-linear py-2 px-4 w-full bg-black text-white'>Add Cart</button>
                </div>


                <h1 className='mt-4 mb-2'>{produtname}</h1>
                <div className={`${flexess} `}>
                    
                <div className='flex gap-2 '>

                    <h4 className='text-primary font-medium'>$ {price}</h4>
                    <h2 className='text-gray-300 line-through font-medium '>$ {discauntprice}</h2>
                </div>
                <div className='flex gap-2.5'>
                <Rate allowHalf defaultValue={4.76} value={rating} />
                <h1 className='font-semibold text-sm text-gray-400'>({ratemathmathics})</h1>
                </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <h1 className={` ${className} rounded-full `}></h1>
                    <h1 className={` rounded-full ${classname}`}></h1>
                </div>

            </div>


        </>
    )
}

export default CustmPcard

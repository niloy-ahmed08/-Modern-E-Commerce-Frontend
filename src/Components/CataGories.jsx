import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import { SlScreenSmartphone } from "react-icons/sl";
import { GiPc } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { LuHeadset } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";



const CataGories = () => {
  return (
    <div className='py-30'>
      <Container>
          <SecHead/>
          
            <h1 className='text-3xl text-black mt-5'>Browse By Category</h1>
         <div className=' flex items-center gap-6'>
                 <div className=' hover:bg-primary border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <SlScreenSmartphone className='text-5xl block mx-auto'/>
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>


             
                 <div className='hover:bg-primary border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <GiPc className='text-5xl block mx-auto' />
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>



            
                 <div className='hover:bg-primary border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <BsSmartwatch className='text-5xl block mx-auto'/>
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>
                
                

                

            
                 <div className='hover:bg-primary border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <FaCamera className='text-5xl block mx-auto' />
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>




            
                 <div className='hover:bg-primary border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <LuHeadset className='text-5xl block mx-auto' />
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>
                     
                 <div className='hover:bg-primary transform transition ease-linear border border-gray-300 h-42.5 mt-15 w-42.5 pt-[32px] pr-8 pl-8'>
                        <LuHeadset className='text-5xl block mx-auto' />
                        <h1 className='text-sm font-normal block text-center mt-5'>Phone</h1>
            </div>
         </div>
        
      </Container>
    </div>
  )
}

export default CataGories

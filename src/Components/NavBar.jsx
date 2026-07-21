import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import navlogos from '../assets/Navlogo.png'
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className=' border-b'>
      
      <div className='container mx-auto'>
       
       <div className='text-black flex justify-between py-7'>
        <div>
          <img src={navlogos} alt="" />
        </div>

           <ul className='text-black flex gap-12 items-center '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Sign Up</li>
           </ul>
           <div className='flex justify-between items-center gap-7.5 cursor-pointer'>
            <div className=' relative pl-5 py-1.5 pr-3 bg-[#828282]'>
           <input type="text" className='pr-17.5 cursor-pointer ' placeholder='What are you looking for? ' />
             <IoIosSearch className=' absolute top-1 right-3 text-[30px]'/>
             
            </div>

            <div className='flex gap-4 '>
              <FaRegHeart className='text-[30px]' />
              <CiShoppingCart className='text-[30px]'/>
            </div>
           </div>
       </div>

      </div>

    </div>
  )
}

export default NavBar

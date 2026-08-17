import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import navlogos from '../assets/Navlogo.png'
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux';


const NavBar = () => {


 
        const selector = useSelector(state=>state.products.cart)

        const dataheart = useSelector(state=>state.products.heart)
      

       

    const navigate = useNavigate()

    const wishnavigate = useNavigate()


  return (
    <div className=' border-b'>
      
      <div className='container mx-auto'>
       
       <div className='text-black flex justify-between py-7'>
        <div>
          <img src={navlogos} alt="" />
        </div>

           <ul className='text-black flex gap-12 items-center text-[16px] font-normal '>
            <li className='cursor-pointer'>

          <NavLink to="/navitgatehome" end>
        Home
      </NavLink>
            </li>
            <li className='cursor-pointer'>

          <NavLink to="/navigatecontect" end>
         Contect
      </NavLink>
            </li>
            <li className='cursor-pointer'>
                      <NavLink to="/navitgateabout" end>
         About
      </NavLink>
            </li>
            <li className='cursor-pointer'>
               <NavLink to="/signuppart" end>
         Sign Up
      </NavLink>
            </li>
           </ul>
           <div className='flex justify-between items-center gap-7.5 cursor-pointer'>
            <div className=' relative pl-5 py-1.5 pr-3 bg-[#82828218]'>
           <input type="text" className='pr-17.5 cursor-pointer outline-none border border-gray-300' placeholder='What are you looking for? ' />
             <IoIosSearch className=' absolute top-1 right-3 text-[30px]'/>
             
            </div>

            <div className='flex gap-4 '>
              <div onClick={()=>wishnavigate('/wishlistdettels')} className='relative'>
              <FaRegHeart className='text-[30px]' />
               <div className='w-5 h-5 rounded-full  flex items-center justify-center absolute -top-1 -right-2
                 text-sm font-semibold  bg-primary  text-white'>{dataheart.length}</div>
              </div>
              <div onClick={()=>navigate('/cartdettels')}  className=' relative'>
              <CiShoppingCart  className='text-[32px]'/>
              <div className=' absolute -top-2 -right-2 size-6 rounded-full bg-primary text-white text-xs flex items-center justify-center'> {selector.length}
              </div>
              </div>


            </div>
           </div>
       </div>

      </div>

    </div>
  )
}

export default NavBar

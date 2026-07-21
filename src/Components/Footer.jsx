import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import quarcode from '../assets/quarcode.png'
import appstore from '../assets/AppStore.png'
import googleapp from '../assets/GooglePlay.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-black py-20'>

      <div className='container mx-auto'>

        <div className='flex  text-white justify-between'>

          <div>
            <h1 className=''>Exclusive</h1>
            <div className='mt-6 space-y-4'>
              <h3>Get 10% off your first order</h3>
              <h2>Subscribe</h2>
              <div className='py-3 w-54.25 pl-2 border border-white mt-4 relative'>
                <input type="text" className='w-30 pl-1' placeholder='enter your email' />
                <SiMinutemailer className=' absolute top-4 left-42' />
              </div>
            </div>
          </div>


          <div>
            <h1>Support</h1>
            <ul className=' space-y-4 mt-6'>
              <li>111 Bijoy sarani, Dhaka,
                <span className='block'>
                  DH 1515, Bangladesh.
                </span>
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>

          </div>

          <div>
            <h1>Account</h1>
            <ul className='space-y-4 mt-6'>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>

            </ul>
          </div>

          <div>
            <h1>Quick Link</h1>
            <ul className='space-y-4 mt-6'>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h1>Download App</h1>
            <div className='mt-6'>
              <h1>Save $3 with App New User Only</h1>
              <div className='flex gap-4 mt-4'>
                <div>
                  <img src={quarcode} alt="" />
                </div>
                <div>
                  <img src={googleapp} alt="" />
                  <img src={appstore} alt="" />
                </div>
              </div>
              <div className='flex mt-7 gap-7.5 text-2xl'>
                <FaFacebook />
                <CiTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default Footer

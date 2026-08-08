import React, { useEffect, useState } from 'react'
import Container from './Container'
import { countDownDateAndTime } from 'countdown-date-time'; 

const SounBox = () => {

     const conduct_date = '2026-8-15 16:54:00';
     const[show,setshow]=useState({})

        useEffect(()=>{
       
            setInterval(()=>{

            const countDown = countDownDateAndTime(conduct_date);
                
                setshow(countDown)


            },1000)

        },[])


  return (
    <div className=' py-18 '>
        <Container>

            <div className='p-15 h-125 bg-[url(./assets/Boxs.png)] bg-no-repeat bg-cover bg-center'>

            <h1 className='mb-8 text-[16px] font-semibold text-[#00FF66]'>Categories</h1>
            <p className='mb-8 text-[48px] font-semibold text-white'>Enhance Your <span className='block'>Music Experience</span> </p>
              <div className=' space-y-6 flex gap-6 mb-5'>

                <div className='w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'>{show.days}</h1>
                    <h1 className='text-[11px] font-normal text-center'>days</h1>
                </div>

                     
                <div className='w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'>{show.days}</h1>
                    <h1 className='text-[11px] font-normal text-center'>Hours</h1>
                </div>


                     
                <div className=' relative w-15.25 h-15.25 rounded-full bg-white p-3.5 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'> {show.minutes}</h1>
                    <h1 className=' absolute left-2.5  text-[11px] font-normal text-center'>Miniutes</h1>
                </div>

                     
                <div className=' relative w-15.25 h-15.25 rounded-full bg-white  p-4 justify-center'>
                    <h1 className='text-[11px] font-normal text-center'> {show.seconds} </h1>
                    <h1 className=' absolute left-2.5 text-[11px] font-normal text-center'>Seconds</h1>
                </div>
            
              </div>

               <button className='bg-green-500 py-4 px-12 rounded-sm cursor-pointer hover:bg-green-400'>Buy Now</button>


            </div>
        </Container>
      
    </div>
  )
}

export default SounBox
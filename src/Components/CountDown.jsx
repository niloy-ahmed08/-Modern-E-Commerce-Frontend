import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time'; 

const CountDown = () => {
    const conduct_date = '2026-10-25 16:54:00';


 const[count,setcount]=useState({})

 useEffect(()=>{

     setInterval(()=>{

         const countDown = countDownDateAndTime(conduct_date);
         setcount(countDown)

     })
 },[])


    return (
        <div className='pb-10'>
            <div className="container mx-auto">

                <div className='flex gap-2 items-center'>
                    <div className='border bg-red-500 w-5 h-10'>

                    </div>
                    <h1>Today's</h1>
                </div>

                <div className='flex gap-15 mt-9'>
                    <h1 className='text-2xl'>Flash Sales</h1>

                  <div className='flex gap-12 items-center'>
                    <div>
                    <h2>Days</h2>
                    <h1 className=' font-bold text-xl text-black'>{count.days}</h1>
                    </div>
                    <div>
                    <h2>Hours</h2>
                    <h1 className='text-xl font-bold'>{count.hours}</h1>
                    </div>
                    <div>
                    <h3>Minites</h3>
                    <h2 className='text-2xl font-bold'>{count.minutes}</h2>
                    </div>
                    <div>
                    <h4>seconds</h4>
                     <h2 className='text-2xl font-bold'>{count.seconds}</h2>  
                    </div>
                  </div>

                </div>

            </div>
        </div>
    )
}

export default CountDown

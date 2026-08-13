import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FiChevronUp } from "react-icons/fi";
const NewCartDettls = ({imgsrcn,titlen,pricen,subtototaln}) => {
  return (
    <div>

         <div className="container">
        
                 <div className='flex justify-between items-center   shadow-sm py-6 px-10 mt-10 rounded-sm'>
        
                    <div className='flex gap-5 w-[32%] items-center'>
                        <img className='size-13.5' src={imgsrcn} alt="" />
                        <h1>{titlen}</h1>
                    </div>
        
                    <div className='w-[30%] '>
                        <h1 className='w-10.25'>$({pricen})</h1>
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
        
                    <h1>$({subtototaln})</h1>
        
                 </div>
        
                </div>
              
      
    </div>
  )
}

export default NewCartDettls

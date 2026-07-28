import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import Btn from './Btn'
import CustmPcard from './CustmPcard'
import baghslady from '../assets/Bagh.png'
import tables from '../assets/table.png'
import jbl from '../assets/soundbox.png'
import jscket from '../assets/Jacket.png'


const SellinghProducts = () => {
  return (
    <div className='pb-15'>
        <Container>

         <div className='flex justify-between'>
            <SecHead
             headtitles='This Month'
             headtitletexttwo='Best Selling Products'
            />
        <button className=' px-12 h-13 bg-primary text-white font-medium mt-11'>View All</button>

         </div>

             <div className='mt-15 flex gap-7.5 '>

           <div className=''>
            <CustmPcard
            
            imgsrc={baghslady}
            produtname='The north coat'
            price='230'
            discauntprice='330'
            
            />
           </div>



                  <div className=''>
            <CustmPcard
            
            imgsrc={jscket}
            produtname='The north coat'
            price='230'
            discauntprice='330'
            
            />
           </div>





                  <div className=''>
            <CustmPcard
            
            imgsrc={tables}
            produtname='The north coat'
            price='230'
            discauntprice='330'
            
            />
           </div>




                  <div className=''>
            <CustmPcard
            
            imgsrc={jbl}
            produtname='The north coat'
            price='230'
            discauntprice='330'
            
            />
           </div>


             </div>



        </Container>
      
    </div>
  )
}

export default SellinghProducts

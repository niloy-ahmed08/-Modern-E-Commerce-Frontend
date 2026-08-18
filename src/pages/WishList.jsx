import React from 'react'
import Container from '../Components/Container'
import WishListDettels from '../Components/WishListDettels'
import { useSelector } from 'react-redux'

const WishList = () => {

      const datahearts = useSelector(state=>state.products.heart)
      

  return (
    <div className='py-20'>
      <Container>

        <div className='flex justify-between items-center'>

         <h1 className='text-lg font-semibold '>WhisList</h1>
         <button className='text-lg font-semibold '>Move All To Bag</button>
        </div>
      <div className='flex flex-wrap gap-10 w-full mx-auto'>
        {
            datahearts.map((item)=>{

                return <WishListDettels
                id={item.id}
                title={item.title}
                imgsrc={item.thumbnail}
                discauntparsent={item.discountPercentage}
                price={item.price}
                discauntprice={(item.price-(item.price *(item.discountPercentage/100))).toFixed(2)}
                 
                
                />

            })
        }
        </div>
        
      </Container>
    </div>
  )
}

export default WishList

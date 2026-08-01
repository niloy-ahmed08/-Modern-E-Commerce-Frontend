import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import CustmPcard from '../Components/CustmPcard';
import BreadCumps from '../Components/BreadCumps';
import Paginates from '../Components/Paginates';

const Shop = () => {


    const [products, setproducts] = useState([])
    const [show,setshow]=useState(6)
         
         
              useEffect(()=>{      
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>setproducts(data.products));
    },[])
    console.log(products)


    return (
        <div className='py-25'>
            <Container>
               
               <BreadCumps/>
                <div className='flex justify-between items-center mt-12.5'>
                    <h1>Shop by Category</h1>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-lg font-bold'>Show :</h1>
                        <div>
                            <select onChange={(e)=>setshow(e.target.value)} className='border border-gray-300 py-1 px-8' name="" id="">
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='flex  gap-x-25 gap-y-3.5'>

                    <div className='w-[20%] pr-5  '>

                        <ul className='py-20 space-y-4'>
                            <li className='flex  justify-between items-center'>Woman’s Fashion <FaArrowRightFromBracket className='cursor-pointer' /> </li>
                            <li className='flex  justify-between  items-center'>Men’s Fashion <FaArrowRightFromBracket className='cursor-pointer' /> </li>
                            <li className='flex  justify-between  items-center'>Electronics</li>
                            <li className='flex  justify-between   items-center'>Home & Lifestyle</li>
                            <li className='flex  justify-between  items-center'>Medicine</li>
                            <li className='flex  justify-between  items-center'>Sports & Outdoor</li>
                            <li className='flex  justify-between  items-center'>Baby’s & Toys</li>
                            <li className='flex  justify-between  items-center'>Groceries & Pets</li>
                            <li className='flex  justify-between  items-center'>Health & Beauty</li>
                        </ul>

                    </div>

                    <div className='w-[80%]'>

                        <div className='flex flex-wrap justify-between gap-y-9.5 gap-x-5 mt-10'>
                            {/* {
                            products.map((item)=>{
                               return <CustmPcard
                                  imgsrc={item.thumbnail}
                                  parsents={item.discountPercentage}
                                  produtname={item.title}
                                  discauntprice={item.price - (item.price * (item.discountPercentage / 100)).toFixed(2)}
                                  price={item.price}
                                  ratemathmathics={item.reviews.length}
                                  rating={item.rating}
                                  
                               />
                            })
                           } */}
                           <Paginates
                           itemsPerPage={show}
                           products={products}
                           />
                        </div>

                    </div>

                </div>



            </Container>

        </div>
    )
}

export default Shop

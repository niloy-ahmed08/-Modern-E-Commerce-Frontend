
import React, { useEffect, useState } from 'react'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import CustmPcard from '../Components/CustmPcard';

import { useDispatch, useSelector } from 'react-redux';
import { ProductReducer } from '../Slice/ProductSlice';

import PaginaTions from '../Components/Paginations';
import axios, { Axios } from 'axios';
import {  data } from 'react-router';


const NewShop = () => {


    const [products, setproducts] = useState([])
    const [show, setshow] = useState(6)

    const Dishpatch = useDispatch()

    const product = useSelector(state => state.storeskey.value)


           const productallaxios = async ()=>{

            let data = await axios.get('https://dummyjson.com/products?limit=100')
            Dishpatch(ProductReducer(data.data.products))
              setproducts(data.data.products)

           }


            useEffect(()=>{

                productallaxios ()
            },[])


    // useEffect(() => {

    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         // .then((data) => setproducts(data.products))
    //         .then((data) => Dishpatch(ProductReducer(data.products)))


    // }, [])



 
                const unicategoriesmains = [...new Set(products.map((items)=>items.category))]
               
                const uniccategory = (itemuniccategory)=>{

                    let unicproduts = products.filter((item)=>item.category == itemuniccategory)
                    
                    Dishpatch(ProductReducer(unicproduts))

                }

               


    return (
        <>

            <div className='py-25'>
                <div className='container'>

                    <div className='flex gap-2 mt- items-center'>
                        <h1>Home</h1>
                        <h3>/</h3>
                        <h2>PathName </h2>
                    </div>

                    <div className='flex justify-between items-center mt-12.5'>
                        <h1>Shop by Category</h1>
                        <div className='flex gap-2 items-center'>
                            <h1 className='text-lg font-bold'>Show :</h1>
                            <div>
                                <select onChange={(e) => setshow(e.target.value)} className='border border-gray-300 py-1 px-8' name="" id="">
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

                                <span onClick={()=>Dishpatch(ProductReducer(products))} className=' cursor-pointer font-semibold text-black  '>All products</span>

                             {
                               unicategoriesmains.map((itemuniccategory)=>{
                             return <li onClick={()=>uniccategory (itemuniccategory)} className='cursor-pointer text-sm font-semibold mt-4'>{itemuniccategory} </li>
                               })
                             }


                            </ul>

                        </div>

                        <div className='w-[80%]'>

                            <div className='flex flex-wrap justify-between gap-y-9.5 gap-x-5 mt-10 '>

                                {/* 
                                {

                                    products.map((item) => {
                                        return <CustmPcard

                                            imgsrc={item.thumbnail}
                                            price={ item.price}
                                            parsents={item.discountPercentage}
                                            discauntprice={item.discountPercentage}
                                            ratemathmathics={item.reviews.length}
                                            produtname={item.title }
                                            rating={item.rating}

                                        />

                                    })

                                } */}



                                <PaginaTions itemsPerPage={show} product={products} />
                            </div>



                        </div>

                    </div>



                </div>

            </div>

        </>
    )
}

export default NewShop

import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { FaArrowRightFromBracket } from "react-icons/fa6";
import CustmPcard from '../Components/CustmPcard';
import Item from 'antd/es/list/Item';
import ReactPaginateModule from 'react-paginate';
import PaginaTion from '../Components/PaginaTion';
import { Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ProductReducer } from '../Slice/ProductSlice';
import axios from 'axios';
import { data } from 'react-router';


const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;

const Shop = () => {


    const [Products, setproducts] = useState([])
    const[show,setshow]=useState(6)
    const[loading,setloading]=useState(true)

        const DishPatch = useDispatch()
      
        const product = useSelector(state => state. storeskey.value)

         


    // useEffect(() => {

    //     fetch('https://dummyjson.com/products?limit=100')
    //         .then(res => res.json())
    //         .then((data) => DishPatch(ProductReducer(data.products)))
    //         // .then((data) => setproducts(data.products))
    //         .then((data)=>(setloading(false)))

    // }, [])


              const AllProducts = async ()=>{

                let datas = await axios.get('https://dummyjson.com/products?limit=100')

               DishPatch(ProductReducer(datas.data.products))
               setproducts(datas.data.products)
                 setloading(false)

              }

             useEffect(()=>{
                AllProducts()
             },[])
              
            
  
            const unikcategoy = [...new Set(Products.map((item)=>item.category))]

       
                 const handalecategory = (unikitems)=>{

                    let unicategoriesmain = Products.filter((itemcategorymain)=>itemcategorymain.category == unikitems)
                     DishPatch(ProductReducer(unicategoriesmain))
                 }
            

    return (
        <div className='py-25'>
            <Container>

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

                        <li onClick={()=>DishPatch(ProductReducer(Products))} className=' cursor-pointer text-sm font-semibold'>All Products</li>
                         
                          {
                            unikcategoy.map((unikitems)=>{
                               return <li className='cursor-pointer text-sm font-semibold mt-4' onClick={()=>handalecategory(unikitems)}>{unikitems}</li>
                            })
                         } 
                          

                        </ul>

                    </div>

                    <div className='w-[80%]'>

                        <div className=''>
                          {
                            loading ? <>
                            <div className='flex flex-wrap  gap-y-10 gap-x-5 mt-10 '>

                               <Skeleton/>
                                <Skeleton/>
                                 <Skeleton/>
                                 <Skeleton/>
                                 <Skeleton/>
                            </div>
                                 
                            </>
                            :
                          <PaginaTion itemsPerPage={show}  />
                          } 
                        </div>

                        

                    </div>

                </div>



            </Container>

        </div>
    )
}

export default Shop

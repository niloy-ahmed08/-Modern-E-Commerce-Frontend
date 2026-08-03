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
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;

const Shop = () => {


    // const [products, setproducts] = useState([])
    const[show,setshow]=useState(6)
    const[loading,setloading]=useState(true)

      const DishPatch = useDispatch()
        const products = useSelector(state => state.ProductStore.value) 

           console.log(products)
      
    useEffect(() => {

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => DishPatch(ProductReducer(data.products)))
            // .then((data) => setproducts(data.products))
            .then((data)=>(setloading(false)))

    }, [])

  
      
    const Unikcategory = [...new Set(products.map((items)=>items.category))]

          const handalecategory =(unikitem)=>{
            let unictagoryss = products.filter((itemss)=>itemss.category == unikitem)
             DishPatch(ProductReducer(unictagoryss))
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
                         

                         {
                            Unikcategory.map((unikitem)=>{
                                 return <li onClick={()=>handalecategory(unikitem)} className=' uppercase font-bold'>{unikitem}</li>
                            })
                         }
                        

                        </ul>

                    </div>

                    <div className='w-[80%]'>

                        <div className='flex flex-wrap justify-between gap-y-9.5 gap-x-5 mt-10 '>

                             {/* {
                            products.map((item)=>{
                                return <CustmPcard
                                
                                imgsrc={item.thumbnail}
                                produtname={item.title}
                                price={item.price}
                                parsents={item.discountPercentage}
                                discauntprice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                                ratemathmathics={item.reviews.length}
                                rating={item.rating}
                                />
                            })
                          }   */}
                          

                          {
                            loading ? <>
                               <Skeleton/>
                                <Skeleton/>
                                 <Skeleton/>
                                 
                            </>
                            :
                          <PaginaTion itemsPerPage={show} />
                          } 




                        </div>

                        

                    </div>

                </div>



            </Container>

        </div>
    )
}

export default Shop

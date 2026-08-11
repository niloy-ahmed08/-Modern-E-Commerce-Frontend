import React, { useEffect, useState } from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import Container from '../Components/Container'
import BreadCump from '../Components/BreadCump'
import Card from '../Components/Card'
import NewPaginate from '../Components/NewPaginate'
import ReactPaginateModule from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux'
import { newReducer } from '../slice/ProductSlice'
import axios from 'axios'
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;


const ShopTwo = () => {

    const [eproducts, seteproducts] = useState([])
    const [show,setshow]=useState(6)


    const dispatches = useDispatch()

    const sellects = useSelector(state=>state.products.newvalue)



    const allproducts = async ()=>{

      const datas = await axios.get('https://dummyjson.com/products')
      dispatches(newReducer(datas.data.products))
      seteproducts(datas.data.products)

    }
   


          useEffect(()=>{

            allproducts()
          },[])

    // useEffect(() => {

    //     fetch('https://dummyjson.com/products')
    //         .then(res => res.json())
    //         // .then((data) => seteproducts(data.products))
    //         .then((data) => dispatches(newReducer(data.products)));

    // }, [])

              const unikCategoryes = [...new Set(eproducts.map((items)=>items.category))]
                     const handalecategorys = (item)=>{

                        const categoryesbycategory =eproducts.filter((itemee)=>itemee.category == item)
                        
                        dispatches(newReducer(categoryesbycategory))
                     }

         

    return (
        <>

            <div className='py-25'>
                <Container>

                    <div className='flex gap-2 mt- items-center'>
                        <BreadCump />
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

                    <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>

                        <div className='w-full lg:w-[22%] xl:w-[20%] pr-0 lg:pr-5'>

                            <ul className='py-20 space-y-4'>

                                <li onClick={()=>dispatches(newReducer(eproducts))} className='text-lg font-semibold cursor-pointer'>All Products</li>

                               {
                                unikCategoryes.map((item)=>{
                                    return <li onClick={()=>handalecategorys(item)} className='text-lg font-semibold cursor-pointer'>{item}</li>
                                })
                               }
                            </ul>

                        </div>

                        <div className='w-[80%]'>

                            <div className='w-full flex flex-wrap  gap-y-10 gap-x-5 mt-12'>

                                {/* {
                                    eproducts.map((item) => {

                                        return <Card
                                            produtname={item.title}
                                            price={item.price}
                                            imgsrc={item.thumbnail}
                                            parsents={item.discountPercentage}
                                            discauntprice={(item.price - (item.price * (item.discountPercentage/100))).toFixed(2)}
                                            ratemathmathics={item.reviews.length}
                                            rating={item.rating}
                                        />
                                    })
                                } */}

                                <NewPaginate itemsPerPage={show} />



                            </div>



                        </div>

                    </div>



                </Container>

            </div>

        </>
    )
}

export default ShopTwo

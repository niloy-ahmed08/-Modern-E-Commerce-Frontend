import React, { useEffect, useState } from 'react';
import Card from '../Components/Card'
import ReactPaginateModule from 'react-paginate';
import { useSelector } from 'react-redux';
const ReactPaginate = ReactPaginateModule?.default ?? ReactPaginateModule;


const NewPaginate = ({ itemsPerPage = 6,  }) => {



         const sellects = useSelector(state=>state.products.newvalue)



    const items = sellects
  

    function Items({ currentItems }) {
        return (
            <>
                <div className='flex flex-wrap  gap-y-10 gap-x-5 mt-12 '>


                    {currentItems &&
                        currentItems.map((item) => (
                            <div>
                                <Card
                                   id={item.id}
                                    produtname={item.title}
                                    price={item.price}
                                    imgsrc={item.thumbnail}
                                    parsents={item.discountPercentage}
                                    discauntprice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                                    ratemathmathics={item.reviews.length}
                                    rating={item.rating}

                                />

                            </div>
                        ))}
                </div>
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.max(1, Math.ceil(items.length / itemsPerPage));

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Math.max(items.length, 1);
        setItemOffset(newOffset);
    };





    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                className='flex gap-10'
                pageClassName='bg-black px-3 py-1 text-white text-xs cursor-pointer'
               previousClassName=''
            />
        </>
    )
}

export default NewPaginate

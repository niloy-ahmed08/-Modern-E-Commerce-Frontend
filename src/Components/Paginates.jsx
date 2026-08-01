
import React, { useState } from 'react';
import CustmPcard from './CustmPcard';

const Paginates = ({ itemsPerPage , products = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const safeProducts = Array.isArray(products) ? products : [];
  const pageCount = Math.max(1, Math.ceil(safeProducts.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, pageCount - 1);

  const startIndex = safeCurrentPage * itemsPerPage;
  const currentItems = safeProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(Math.min(Math.max(page, 0), pageCount - 1));
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between' }}>
        {currentItems.map((item) => (
          <div key={item.id || item.title} style={{ flex: '1 1 220px', maxWidth: '240px' }}>
            <CustmPcard
              imgsrc={item.thumbnail}
              parsents={item.discountPercentage}
              produtname={item.title}
              discauntprice={Number((item.price - item.price * (item.discountPercentage / 100)).toFixed(2))}
              price={item.price}
              ratemathmathics={item?.reviews?.length || 0}
              rating={item.rating}
            />
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <button onClick={() => handlePageChange(safeCurrentPage - 1)} disabled={safeCurrentPage === 0}>
          
        </button>

        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            style={{ fontWeight: safeCurrentPage === index ? '700' : '400' }}
            className=' text-2xl bg-black text-white py-1 px-8'
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => handlePageChange(safeCurrentPage + 1)} disabled={safeCurrentPage >= pageCount - 1}>
          
        </button>
      </div>
    </div>
  );
};

export default Paginates;

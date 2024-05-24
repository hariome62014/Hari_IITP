import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import './Pagination.css';

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  // useEffect(() => {
  //   handlePageChange(page);
  // }, [page]);

  return (
    <div className='footer'>
      <footer-content>
      <div className='page-set-btn'>
        {page > 1 && (
          <button onClick={() => handlePageChange(page-1)}>
            Previous
          </button>
        )}
        {page < totalPages && (
          <button onClick={() => handlePageChange(page+1)}>
            Next
          </button>
        )}
      </div>
      <div>
        <p>Page {page} of {totalPages}</p>
      </div>
      </footer-content>
    </div>
  );
};

export default Pagination;

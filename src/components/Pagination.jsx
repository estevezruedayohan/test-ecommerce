import { useState } from 'react';

const Pagination =  ({ itemsPerPage, lengthProducts, setOffSet }) => {

  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(lengthProducts / itemsPerPage); 
  
  const handlePreviousPage = () => {
    if (page >= 1) {
      setPage(page - 1);
      setOffSet(page * itemsPerPage);
    }
  };

  const handleNextPage = () => {
    if(page < totalPage){
      setPage(page + 1);
      setOffSet(page * itemsPerPage);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{ itemsPerPage * (page - 1) + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{ page * itemsPerPage < lengthProducts ? page * itemsPerPage : lengthProducts}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{lengthProducts}</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            type="button"
            disabled={page === 1 ? true : false}
            className={`py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
            ${page === 1 && 'opacity-60'}`}
            onClick={handlePreviousPage}
          >
            Prev
          </button>

          <button
            type="button"
            disabled={page * itemsPerPage >= lengthProducts ? true : false}
            className={`py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ${ page * itemsPerPage >= lengthProducts && 'opacity-60'}`}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;

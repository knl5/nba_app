/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { ContainerPagination, PaginationButton } from './styledComponents';

export function Pagination({ pages }) {
  const [pagesArray, setPagesArray] = useState([]);

  function createArray() {
    for(let i = 0; i < pages - 2030 ; i++) {
      setPagesArray([...pagesArray, i]);
      console.log(i, pagesArray);
    }
  }

  useEffect(() => {
    createArray();
  }, [pages]);
	
  return (
    <ContainerPagination>
      {pagesArray && pagesArray.map(page =>
        <PaginationButton key={Math.random()}>{page}</PaginationButton>
      )}
    </ContainerPagination>
  );
}

export default Pagination;
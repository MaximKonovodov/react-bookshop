import { filter } from 'lodash';
import React from 'react';

import Pagination from 'react-bootstrap/Pagination';

const Paginataion = ({ filter, setFilter, count }) => {
  const changeHandler = (e) => {
    setFilter({ ...filter, page: e.target.name });
  };

  let items = [];
  for (let number = 1; number <= Math.ceil(count / 10); number++) {
    items.push(
      <Pagination.Item
        key={number}
        name={number}
        active={number == filter.page}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className='d-flex justify-content-center'>
      <Pagination onClick={changeHandler}>{items}</Pagination>
    </div>
  );
};
export default Paginataion;

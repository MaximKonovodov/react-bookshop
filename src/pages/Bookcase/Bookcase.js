import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Book from './components/Book.js';
import Sidebar from './components/Sidebar.js';
import Pagination from './components/Pagination.js';

import { getBooks } from '../../api';

const Bookcase = (props) => {
  const [books, setBooks] = useState([]);
  const [booksCount, setCount] = useState(0);
  const [filter, setFilter] = useState({
    authors: [],
    categories: [],
    price: [0, 200],
    page: 1,
  });

  const loadBooks = async () => {
    const req = makeReq();
    const data = await getBooks(req);
    setCount(data.count);
    setBooks(data.rows);
  };

  const makeReq = () => {
    const { authors, categories, price, page } = filter;
    let req = '?';

    req = req.concat(`authors=${authors}&`);
    req = req.concat(`categories=${categories}&`);

    req = req.concat(`price=${price[0]}&price=${price[1]}&`);
    req = req.concat(`page=${page}`);

    return req;
  };

  useEffect(() => {
    loadBooks();
  }, [filter]);

  if (!books) return <div>"loading"</div>;
  return (
    <Container fluid='md'>
      <Row>
        <Col sm={3}>
          <Sidebar setFilter={setFilter} filter={filter} />
        </Col>
        <Col sm={9}>
          <div className='row row-cols-0.1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
            {books.map((book) => (
              <Book book={book} key={book.id} />
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {booksCount > 10 && (
            <Pagination
              setFilter={setFilter}
              filter={filter}
              count={booksCount}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Bookcase;

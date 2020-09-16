import React from 'react';
import { Link } from 'react-router-dom';

import starImg from '../../../media/star.jpeg';
import DEFAULT_PHOTO from '../../../media/logo.png';

const Book = (props) => {
  const { book } = props;
  // const bookPhoto = book.photo
  //   ? `http://localhost:4000/${book.photo}`
  //   : DEFAULT_PHOTO;

  return (
    <div className='col book-card'>
      <Link to={`/book/${book.id}`}>
        <div className='card shadow-sm'>
          <img
            src={DEFAULT_PHOTO}
            alt='not today'
            className='card-img-top book-photo '
          />
          <div className='card-body book-body d-flex align-items-end flex-column'>
            <span className='bd-highlight width-fill'>{book.name}</span>
            <small className='text-muted width-fill'>{book.author.name}</small>

            <div className='d-flex justify-content-between align-items-center mt-auto width-fill'>
              <span>
                <img src={starImg} alt='rate' className='rate'></img>{' '}
                {book.rating}
              </span>
              <span>${book.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Book;

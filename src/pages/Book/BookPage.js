import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import { getBookById } from '../../api';

import starImg from '../../media/star.jpeg';
import DEFAULT_PHOTO from '../../media/logo.png';

import Comments from './components/Comments.js';

const BookPage = (props) => {
  const [book, setBook] = useState(null);
  // const bookPhoto = book.photo
  //   ? `http://localhost:4000/${book.photo}`
  //   : DEFAULT_PHOTO;

  const loadBook = async (id) => {
    const book = await getBookById(id);
    setBook(book);
  };

  useEffect(() => {
    loadBook(props.match.params.id);
  }, []);

  if (!book) return <div>Loading</div>;
  return (
    <div className='container'>
      {/* <Link to='/books'>
          <button type="button" className="btn btn-light tool-bar" >
            Back
          </button>
        </Link> */}

      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-md-4 col-lg-3 col-xl-3'>
            <img
              src={DEFAULT_PHOTO}
              alt='not your day'
              className='card-img'
            ></img>
          </div>

          <div className='col'>
            <div className='card-body d-flex align-items-end flex-column bd-highlight'>
              <span className=' width-fill'>{book.name}</span>
              <small className='text-muted width-fill'>
                {book.author.name}
              </small>

              <div className='d-flex justify-content-between align-items-center mt-auto width-fill'>
                <span>
                  <img src={starImg} alt='rate' className='rate'></img>{' '}
                  {book.rating}
                </span>
                <span>${book.price}</span>
              </div>
            </div>
            <p className='card-text m-2'>{book.description}</p>
          </div>
        </div>
      </div>

      <div>
        <h4>Пример Текста</h4>
        <p>{book.example_text}</p>
      </div>

      {/* <div className='list-unstyled'>
        <h3>Комментарии</h3>
        {book.comments.map((comments) => (
          <Comments comments={comments} key={comments.id} />
        ))}
      </div> */}
    </div>
  );
};
export default BookPage;

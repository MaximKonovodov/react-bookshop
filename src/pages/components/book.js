import React from 'react';
import { Link } from 'react-router-dom'

import starImg from '../../media/star.jpeg'

export default class Book extends React.Component {

  render() {
    const { book } = this.props;
    return (
      <div className="col book-card">
        <Link to={`/book/id${book.id}`}>
          <div className="card shadow-sm">

            <img src={`http://localhost:4000/books/${book.photo}`} alt="not today" className="card-img-top book-photo " />
            <div className="card-body book-body d-flex align-items-end flex-column">

              <span className="bd-highlight width-fill">{book.name}</span>
              <small className="text-muted width-fill">{book.author}</small>

              <div className="d-flex justify-content-between align-items-center mt-auto width-fill">
                <span><img src={starImg} alt="rate" className="rate"></img> {book.rating}</span>
                <span>${book.price}</span>
              </div>

            </div>

          </div>
        </Link>
      </div>
    )
  }
}
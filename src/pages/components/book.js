import React from 'react';
import star from '../../media/star.jpeg'
import { Link } from 'react-router-dom'

export default class Book extends React.Component {
  render() {
    const book = this.props.book;
    return (
      <div className="col book-card">
        <Link to={`/book/id${book.id}`}>
          <div className="card shadow-sm">

            <img src={require(`../../server/books/${book.photo}`)} alt="not today" className="card-img-top book-photo " />
            <div className="card-body book-body d-flex align-items-end flex-column">

              <span className="bd-highlight width">{book.name}</span>
              <small className="text-muted width">{book.author}</small>

              <div className="d-flex justify-content-between align-items-center mt-auto width">
                <span><img src={star} alt="rate" className="rate"></img> {book.rating}</span>
                <span>${book.price}</span>
              </div>

            </div>

          </div>
        </Link>
      </div>
    )
  }
}
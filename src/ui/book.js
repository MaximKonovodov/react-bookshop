import React from 'react';

export default class Book extends React.Component {
  render() {
    const book = this.props.book;

    return (
      <div className="card mb-3 col-6 col-sm-4 col-md-3 col-lg-2" href="#">
          <div>
            <img src={require(`../back/books/${book.photo}`)} alt="not today" className="card-img-top" />
          </div>
          <div className="card-body">
            <h6 className="card-title">
              {book.name}
            </h6>
            <p className="text-muted">
              {book.author}
            </p>
            <h6>
              ${book.price}
            </h6>
          </div>
      </div>
    )
  }
}
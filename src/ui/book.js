import React from 'react';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenBookPage = this.handleOpenBookPage.bind(this);
  }

  handleOpenBookPage(ev, book) {
    this.props.onBookPage(book.id)
  }

  render() {
    const book = this.props.book;

    return (
      <div className="card mb-3 col mb-4" onClick={(ev) => this.handleOpenBookPage(ev, book)}>
          <div>
            <img src={require(`../back/books/${book.photo}`)} alt="not today" className="card-img-top" />
          </div>
          <div className="card-body">
            <h6 className="card-title">
              {book.name}
            </h6>
            <p className="card-author">
              <small className="text-muted">{book.author}</small>
            </p>
            <h6 className="align-items-end">
              ${book.price}
            </h6>
          </div>
      </div>
    )
  }
}
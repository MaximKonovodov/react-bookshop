import React from 'react';
import star from '../images/star.jpeg'

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
      <div className="col book-card" onClick={(ev) => this.handleOpenBookPage(ev, book)}>
        <div class="card shadow-sm">

          <img src={require(`../back/books/${book.photo}`)} alt="not today" className="card-img-top book-photo " />
          <div className="card-body book-body d-flex align-items-end flex-column">

            <span className="bd-highlight width">{book.name}</span>
            <small className="text-muted width">{book.author}</small>

            <div class="d-flex justify-content-between align-items-center mt-auto width">
              <span><img src={star} alt="rate" className="rate"></img> {book.rating}</span>
              <span>${book.price}</span>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
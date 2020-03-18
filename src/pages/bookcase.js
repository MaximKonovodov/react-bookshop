import React from 'react';
import { getBooks } from '.././api'
import Book from '../ui/book.js'
import BookPage from './components/BookPage'
import Toolbar from './components/toolbar.js'

export default class Bookcase extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenBookPage = this.handleOpenBookPage.bind(this);
    this.handleCloseBookPage = this.handleCloseBookPage.bind(this);

    this.state = {
      books: [],
      isBookPage: false,
      bookID: 0,
    }
  }

  loadBooks = async () => {
    let books = await getBooks();

    this.setState({
      books
    })
  }

  componentDidMount() {
    this.loadBooks()
  }

  handleOpenBookPage(bookID) {
    let isBookPage = !this.state.isBookPage;
    this.setState({
      isBookPage,
      bookID
    })
  }

  handleCloseBookPage() {
    let isBookPage = !this.state.isBookPage;
    this.setState({
      isBookPage
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.isBookPage ? (
          <BookPage
            id={this.state.bookID}
            onCloseBookPage={this.handleCloseBookPage}
          />
        ) : (
            <>
              <div className=""><Toolbar /></div>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8">
                {this.state.books.map((book) => (
                  <Book
                    book={book}
                    key={book.id}
                    onBookPage={this.handleOpenBookPage}
                  />
                ))}
              </div>
            </>
          )}
      </div>
    )
  }
}
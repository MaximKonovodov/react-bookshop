import React from 'react';
import { getBooks } from '.././api'
import Book from '../ui/book.js'
import Toolbar from './components/toolbar.js'

export default class Bookcase extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenBookPage = this.handleOpenBookPage.bind(this);

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
    this.props.onOpenBookpage(bookID)
  }

  render() {
    return (
      <div>
        <div className="tool-bar"><Toolbar /></div>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-0.1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

              {this.state.books.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                  onBookPage={this.handleOpenBookPage}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
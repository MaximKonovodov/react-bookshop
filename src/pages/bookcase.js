import React from 'react';

import { getBooks } from '../api'

import Book from './components/book.js'
// import Toolbar from './components/toolbar.js'

export default class Bookcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  loadBooks = async () => {
    const books = await getBooks();
    if (!books) return;
    this.setState({ books })
  }

  componentDidMount() {
    this.loadBooks()
  }

  render() {
    return (
      <div>
        {/* <div className="tool-bar"><Toolbar /></div> */}

        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-0.1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

              {this.state.books.map((book) => (
                <Book
                  book={book}
                  key={book.id}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
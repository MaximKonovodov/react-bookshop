import React from 'react';
import { getBooks } from '.././api'
import Book from '../ui/book.js'
import Toolbar from './components/toolbar.js'

export default class Bookcase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
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

  render() {
    if (this.state.books === undefined) return <div>щагрузка</div>
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="toolbar"><Toolbar /></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            {this.state.books.map((book) => (
              <Book book={book}
                key={book.id}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}
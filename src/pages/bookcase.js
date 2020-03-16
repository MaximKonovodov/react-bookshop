import React from 'react';
import { getBooks } from '.././api'
import Book from '../ui/book.js'

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
      <div className="container">
        <div>
          <span>Сортировка</span>
        </div>
        <div className="row">

          {this.state.books.map((book) => (
            <Book
              key={book.id}
              photo={book.photo}
              name={book.name}
              author={book.author}
              price={book.price}
            />
          ))}
        </div>
      </div>
    )
  }
}
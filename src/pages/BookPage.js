import React from 'react';
import { Link } from "react-router-dom";

import { getBookById } from '../api'

import starImg from '../media/star.jpeg'

import Review from './components/review.js'

export default class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        reviews: []
      },
    }
  }

  loadBook = async (id) => {
    const book = await getBookById(id);
    this.setState({
      book
    })
  }

  componentDidMount() {
    this.loadBook(this.props.match.params.id)
  }

  render() {
    const { book } = this.state;
    if ( (book && book.photo) === undefined ) return null;
    return (
      <div className="container">

        {/* <Link to='/books'>
          <button type="button" className="btn btn-light tool-bar" >
            Back
          </button>
        </Link> */}

        <div className="card">
          <div className="row no-gutters">

            <div className="col-md-4 col-lg-3 col-xl-3">
              <img src={`http://localhost:4000/books/${book.photo}`} alt='not your day' className="card-img"></img>
            </div>

            <div className="col">
              <div className="card-body d-flex align-items-end flex-column bd-highlight">

                <span className=" width-fill">{book.name}</span>
                <small className="text-muted width-fill">{book.author}</small>

                <div className="d-flex justify-content-between align-items-center mt-auto width-fill">
                  <span><img src={starImg} alt="rate" className="rate"></img> {book.rating}</span>
                  <span>${book.price}</span>
                </div>

              </div>
              <p className="card-text m-2">{book.description}</p>
            </div>

          </div>
        </div>

        <div>
          <h4>Пример Текста</h4>
          <p>{book.example_Text}</p>
        </div>

        <div className="list-unstyled">
          <h3>Комментарии</h3>
          {book.reviews.map((review) => (
            <Review
              review={review}
              key={review.id}
            />
          ))}
        </div>

      </div>
    )
  }
}

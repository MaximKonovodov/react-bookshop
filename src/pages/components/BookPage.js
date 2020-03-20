import React from 'react';
import { getBookById } from '../../api/index'
import star from '../../images/star.jpeg'
import Review from './review.js'

export default class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseBookPage = this.handleCloseBookPage.bind(this)

    this.state = {
      book: {},
    }
  }

  loadBook = async (id) => {
    const book = await getBookById(id);

    this.setState({
      book
    })
  }

  componentDidMount() {
    this.loadBook(this.props.id)
  }

  handleCloseBookPage() {
    this.props.onCloseBookPage();
  }

  render() {
    let book = this.state.book;
    if (this.state.book.photo === undefined) return <div>Загрузка</div>
    return (
      <div className="container">

        <button type="button" className="btn btn-light tool-bar" onClick={(ev) => this.handleCloseBookPage()}>
          Back
          </button>

        <div className="card">
          <div className="row no-gutters">

            <div className="col-md-4 col-lg-3 col-xl-3">
              <img src={require(`../../back/books/${this.state.book.photo}`)} alt='not your day' className="card-img"></img>
            </div>

            <div className="col">
              <div className="card-body d-flex align-items-end flex-column bd-highlight">

                <span className=" width">{book.name}</span>
                <small className="text-muted width">{book.author}</small>

                <div class="d-flex justify-content-between align-items-center mt-auto width">
                  <span><img src={star} alt="rate" className="rate"></img> {book.rating}</span>
                  <span>${book.price}</span>
                </div>

              </div>
              <p className="card-text m-2">{this.state.book.description}</p>
            </div>

          </div>
        </div>

        <div>
          <h4>Пример Текста</h4>
          <p className="">{this.state.book.example_Text}</p>
        </div>

        <div className="list-unstyled">
          <h3>Комментарии</h3>
          {this.state.book.reviews.map((review) => (
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

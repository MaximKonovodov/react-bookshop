import React from 'react';
import { getBookById } from '../../api/index'
// import ad from '../../back/books/'

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
    if (this.state.book.photo === undefined) return <div>Загрузка</div>
    return (
      <div>
          <button type="button" className="btn btn-light" onClick={(ev) => this.handleCloseBookPage()}>
            Back
        </button>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={require(`../../back/books/${this.state.book.photo}`)} alt='not your day' className="card-img"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.state.book.name}</h5>
                  <h4 className="card-title">{this.state.book.author}</h4>
                  <span className="card-title">${this.state.book.price}</span>
                  <p className="card-text">{this.state.book.description}</p>
                  <p className="card-text">{this.state.book.example_Text}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

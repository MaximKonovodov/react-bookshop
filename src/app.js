import React from 'react';
import Header from './ui/header.js'
import Bookcase from './pages/bookcase.js'
import BookPage from './pages/components/BookPage.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenBookPage = this.handleOpenBookPage.bind(this);
    this.handleCloseBookPage = this.handleCloseBookPage.bind(this);

    this.state = {
      isBookPage: false,
      bookID: 0,
    }
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
      <div>
        <Header />

        {/* <a name={BookPage}>link</a> */}
          {this.state.isBookPage ? (
            <BookPage
              id={this.state.bookID}
              onCloseBookPage={this.handleCloseBookPage}
            />
          ) : (
              <Bookcase
                id={this.state.bookID}
                onOpenBookpage={this.handleOpenBookPage}
              />
            )}

      </div>
    );
  }
}
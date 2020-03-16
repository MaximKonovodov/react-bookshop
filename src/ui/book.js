import React from 'react';

export default class Book extends React.Component {
  render() {
    const { photo, name, author, price } = this.props;

    return (
      <div className="card mb-3 col-6 col-sm-4 col-md-3 col-lg-2">
        <div>
          <img src={require(`../back/books/${photo}`)} alt="not today" className="card-img-top" /> 
        </div>
        <div className="card-body">
          <h6 className="card-title">
            {name}
          </h6>
          <p className="text-muted">
            {author}
          </p>
          <h6>
            ${price}
          </h6>
        </div>
      </div>
    )
  }
}
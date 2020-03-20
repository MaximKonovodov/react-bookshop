import React from 'react';
import star from '../../images/star.jpeg'

export default class Review extends React.Component {

  render() {
    let review = this.props.review;
    return (
      <li className="media">
        {review.photo === undefined &&
          <Rect />}
        <div className="media-body">
          <h5 className="mt-0 mb-1">{review.author}</h5>
          <div type="text">{review.text}</div>
          <p><img src={star} alt="rate" className="rate"></img> {review.rating}</p>
        </div>
      </li>
    )
  }
}

function Rect() {
  return (
    <svg className="bd-placeholder-img mr-3 align-self-center" width="64" height="64"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
      role="img" aria-label="Placeholder: 64x64"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#868e96"></rect>
      <text x="15%" y="50%" fill="#dee2e6" dy=".3em">64x64</text>
    </svg>
  )
}
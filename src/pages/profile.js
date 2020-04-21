import React from 'react';

import Auth from './components/auth'
import AddBookBlock from './components/addBook'

import { createBook } from '../api'

export default class Profile extends React.Component {
  render() {
    return (
      <>
        {/* <Auth /> */}
        <AddBookBlock />
      </>
    )
  }
}
import axios from 'axios';

export const getBooks = async (params) => {
  return axios.get('http://localhost:4000/books')
    .then((res) => {
      return res.data.books
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getBookById = async (id) => {
  return axios.get(`http://localhost:4000/book/id${id}`)
    .then((res) => {
      return res.data.book
    })
    .catch((err) => {
      console.log(err)
    })
}

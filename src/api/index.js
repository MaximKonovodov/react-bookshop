import axios from './axios';

export const getBooks = async (params) => {
  return axios
    .get(`/books/${params}`)
    .then((res) => {
      return res.data.books;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBookById = async (id) => {
  return axios
    .get(`/books/${id}`)
    .then((res) => {
      return res.data.book;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createBook = async (data) => {
  axios
    .post('/books/createBook', data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

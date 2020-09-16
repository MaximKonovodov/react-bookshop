import axios from './axios';

export const getBooks = (params) => {
  return axios
    .get(`/books/${params}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getBookById = (id) => {
  return axios
    .get(`/books/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const createBook = (data) => {
  return axios
    .post('/books/createBook', data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

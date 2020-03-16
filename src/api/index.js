import bookStorage from '../back/books.json';

export const getBooks = async (params) => {
  return new Promise((resolve, reject) => {
    let bookResponse = bookStorage;
    if (params) {
      //
    }
    resolve(bookResponse);
  })
}


import bookStorage from '../server/books.json';

export const getBooks = async (params) => {
  return new Promise((resolve, reject) => {
    let bookResponse = bookStorage;
    if (params) {
      //
    }
    resolve(bookResponse);
  })
}

export const getBookById = async (id) => {
  return new Promise((resolve, reject) => {
    let bookResponse = bookStorage.find(book => `${book.id}` === id);
    resolve(bookResponse);
  })
}

const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

export { createBook, removeBook };

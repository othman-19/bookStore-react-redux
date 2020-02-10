const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter: filter,
})

export { createBook, removeBook, changeFilter };

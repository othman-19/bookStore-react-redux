const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initState = [
  { title: 'Harry Potter', category: 'Kids', id: Math.random() },
  { title: 'Steve Jobs', category: 'Biography', id: Math.random() },
  { title: 'Microverse', category: 'Learning', id: Math.random() }
];

const books = (state = initState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;

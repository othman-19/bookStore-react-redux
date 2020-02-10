import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';

const stateBook = (title, category) => ({
  id: Math.random(),
  title,
  category,
});

const book1 = stateBook('Harry Potter', 'Kids');
const book2 = stateBook('Steve Jobs', 'Biography');
const book3 = stateBook('Microverse', 'Learning');
const books = [book1, book2, book3];
const filter = null;

const store = createStore(rootReducer, { books, filter });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

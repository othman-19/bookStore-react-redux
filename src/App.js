import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="panel-bg">
        <ul>
          <li className="logo">Bookstore CMS</li>

          <li className="BOOKS">Books</li>
          <li className="CATEGORIES">Categories</li>
          <li className="icon"><i className="fas fa-user" /></li>
        </ul>
      </div>

      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;

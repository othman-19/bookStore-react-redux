import React from 'react';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';

function App() {
  return (
    <div className="App">
      <h1> Book Store Project...</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;

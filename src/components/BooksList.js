import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList({ books }) {
  const bookList = books.map(book => (
    <Book
      id={book.id}
      title={book.title}
      category={book.category}
      key={book.id}
    />
  ));
  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Id:</th>
            <th>Title:</th>
            <th>Category:</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default connect(mapStateToProps)(BooksList);

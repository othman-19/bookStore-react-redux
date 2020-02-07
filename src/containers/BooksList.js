import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

function BooksList({ books, removeBook }) {
  const handleRemoveBook = book => removeBook(book);
  const bookList = books.map(
    book => <Book book={book} key={book.id} removeBook={handleRemoveBook} />,
  );
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

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});


BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

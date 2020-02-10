import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books,
  removeBook,
  changeFilter,
  filter,
}) {
  console.log(filter);
  const handleRemoveBook = book => removeBook(book);
  const bookList = books.map(
    book => <Book book={book} key={book.id} removeBook={handleRemoveBook} />,
  );
  const handleFilterChange = filter => {
    changeFilter(filter);
  };
  return (
    <div>
      <CategoryFilter filterChangeHandler={handleFilterChange} />
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
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});


BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

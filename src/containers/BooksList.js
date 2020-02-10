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
  const handleRemoveBook = book => removeBook(book);
  const getBooks = filter => {
    switch (filter) {
      case 'All':
        return books;
      case filter:
        return books.filter(book => book.category === filter);
      default:
        return books;
    }
  };
  const bookList = getBooks(filter).map(book => (
    <Book book={book} key={book.id} removeBook={handleRemoveBook} />
  ));
  const handleFilterChange = filter => {
    changeFilter(filter);
  };
  return (
    <div>
      <CategoryFilter filterChangeHandler={handleFilterChange} />
      {bookList}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);

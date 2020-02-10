import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  return (
    <div className="Lesson-Panel">
      <div className="first-row">
        <span className="School-of">{book.category}</span>
        <span className="Current-Chapter">Current Chapter</span>
      </div>
      {book.title}

      <button
        className="Rectangle-2"
        type="button"
        onClick={() => removeBook(book)}
      >
        <span className="remove">Remove</span>
      </button>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default Book;

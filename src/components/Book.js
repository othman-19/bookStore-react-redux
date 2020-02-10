import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  return (
    <div className="Lesson-Panel">
      <div className="first-row">
        <span className="School-of">{book.category}</span>
        <span className="Current-Chapter">Current Chapter</span>
      </div>
      <div className="second-row">
        <span className="title">{book.title}</span>
        <span className="chapterNo">Chapter 15</span>
      </div>

      <span className="author">Author's Name</span>
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

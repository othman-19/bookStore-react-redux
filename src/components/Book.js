import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Book;

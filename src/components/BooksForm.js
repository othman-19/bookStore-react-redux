import React from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi'
];

function BooksForm() {
  return (
    <form>
      <label>Book Title:</label>
      <input type="text" name="title" />
      <select>
        {categories.map(category => (
          <option>{category}</option>
        ))}
      </select>
    </form>
  );
}

export default BooksForm;

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
      <label htmlFor="title">
        Book Title:
        <input type="text" name="title" id="title" required />
      </label>
      <br />
      <select required>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BooksForm;

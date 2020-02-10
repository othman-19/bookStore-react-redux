import React from 'react';

function CategoryFilter() {
  const filters = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];
  return (
    <label >
      Select Book Category:
      <select name="filter">
        {filters.map(filter => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
    </label>
  );
}

export default CategoryFilter;

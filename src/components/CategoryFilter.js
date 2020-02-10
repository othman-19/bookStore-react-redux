import React from 'react';
import PropTypes from 'prop-types';

function CategoryFilter({ filterChangeHandler }) {
  const filters = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div className="filter">
      <span className="filter-select">Select Book Category:</span>
      <select name="filter" onChange={e => filterChangeHandler(e.target.value)}>
        {filters.map(filter => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filterChangeHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;

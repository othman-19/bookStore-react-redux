import React from 'react';
// import { connect } from 'react-redux';

function BooksList() {
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
        <tbody>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;

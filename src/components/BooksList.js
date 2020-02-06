import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

function BooksList(props) {
  console.log(props);
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
        </tbody>
      </table>
    </div>
  );
}

export default connect()(BooksList);

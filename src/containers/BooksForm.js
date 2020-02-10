import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', category: 'Action' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const newBook = { id: Math.random(), ...this.state };
    createBook(newBook);
    this.setState({ title: '', category: 'Action' });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="form-listing">
        <h3 className="add-book">ADD NEW BOOK</h3>
        <form onSubmit={this.handleSubmit} className="books-form">
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={this.handleChange}
            placeholder="Book Title"
          />
          <select
            name="category"
            onChange={this.handleChange}
            value={category}
            required
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);

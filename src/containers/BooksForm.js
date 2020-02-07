import React, { Component } from 'react';
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
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    const newBook = { id: Math.random(), ...this.state  };
    createBook(newBook);
    this.setState = ({});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Book Title:
          <input type="text" name="title" id="title" required onChange={this.handleChange}/>
        </label>
        <br />
        <select name="category" onChange={this.handleChange} required>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook: book => { dispatch(createBook(book)) }
  }
}


export default connect(null, mapDispatchToProps)(BooksForm);

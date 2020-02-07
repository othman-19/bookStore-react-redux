import React, { Component } from 'react';
import { connect } from 'react-redux';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi'
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
	}
	handleChange = e => {
		const newBook = {[e.target.name]: e.target.value }
		this.setState({...this.state,newBook });
		console.log(this.state)
	};

	handleSubmit = () => {

	}
	
  render() {
    return (
      <form>
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

const mapStateToProps = state => {
	return 
}

export default BooksForm;

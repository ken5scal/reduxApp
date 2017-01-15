import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.asdf) -> 123
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Whatever is returned will show up as props
// inside of BookList
// When state ever changes, this container will be re-rendered
function mapStateToProps(state) {
  return {
    // asdf: '123'
    books: state.books
  };
}

// connect takes function and component, then produces container
export default connect(mapStateToProps)(BookList);

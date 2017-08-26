import React, { Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return <div> Select a book to get started </div>;
    }
    return (
      <div>
        <h3>Book deatail </h3>
        <div> book:{ this.props.book.title }</div>
        <div> pages:{ this.props.book.pages }</div>
      </div>
      );
  }

}

function mapStateToProps(state) {
  return {
    // activeBook from our activeBook pierce of state
    // in reducers/index.js in the combineReducers
    book: state.activeBook
  };
}

export default connect( mapStateToProps)(BookDetail);

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
//
// {
//   books: [{}, {}],
//   activeBook: {}
// }
const rootReducer = combineReducers({
  // add key to global app state called books.
  books: BooksReducer
});

export default rootReducer;

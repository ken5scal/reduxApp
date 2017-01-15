import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
//
// {
//   books: [{}, {}],
//   activeBook: {}
// }
const rootReducer = combineReducers({
  // add key to global app state called books.
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

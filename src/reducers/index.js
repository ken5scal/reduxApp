import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
//
// {
//   books: [{}, {}],
//   activeBook: {}
// }
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;

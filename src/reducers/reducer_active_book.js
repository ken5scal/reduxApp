// All reducer takes state and action.
// This function will be called only when action is dispatched
// State argument is not app state,
// only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}

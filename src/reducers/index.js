import { combineReducers } from 'redux';

const PLACEHOLDER = 'PLACEHOLDER';

const initialState = {
  placholder: null
}

function placeholder(state = initialState, action) {
  switch(action) {
    case PLACEHOLDER:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  placeholder
});

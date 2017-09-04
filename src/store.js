import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authListener } from './actions/auth';
import reducer from './reducers';



const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(authListener());

console.log(store.getState());

export default store;

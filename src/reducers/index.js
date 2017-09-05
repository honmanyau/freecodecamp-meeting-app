import { combineReducers } from 'redux';

import auth from './auth';
import fetch from './fetch';
import subscribe from './subscribe';



export default combineReducers({
  auth,
  fetch,
  subscribe
});

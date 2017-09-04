import {
  AUTH_PROGRESS,
  AUTH_USER
} from '../actions/auth';



const initialState = {
  inProgress: false,
  user: null,
  redirect: false
};

export default function auth(state = initialState, action) {
  switch(action.type) {
    case AUTH_PROGRESS:
      return {
        ...state,
        inProgress: action.payload.inProgress
      }

    case AUTH_USER:
      return {
        ...state,
        user: action.payload.user
      }

    default:
      return state;
  }
}

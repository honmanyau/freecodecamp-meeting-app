import { AUTH_PROGRESS } from '../actions/auth';



const initialState = {
  inProgress: true,
  user: null
};

export function auth(state = initialState, action) {
  switch(action) {
    case AUTH_PROGRESS:
      return {
        ...state,
        inProgress: this.state.inProgress
      }

    default:
      return state;
  }
}

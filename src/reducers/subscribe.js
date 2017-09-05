import { SUBMITTING } from '../actions/subscribe';



const initialState = {
  inProgress: false
}

export default function subscribe(state = initialState, action) {
  switch(action.type) {
    case SUBMITTING:
      return {
        ...state,
        inProgress: action.payload.inProgress
      }

    default:
      return state;
  }
}

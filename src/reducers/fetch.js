import {
  FETCH_PROGRESS,
  STORE_FETCHED,
  RESTORE_FETCHED
} from '../actions/fetch';



const initialState = {
  inProgress: false,
  data: null
}

export default function fetch(state = initialState, action) {
  switch(action.type) {
    case FETCH_PROGRESS:
      return {
        ...state,
        inProgress: action.payload.inProgress
      };

    case STORE_FETCHED:
      return {
        ...state,
        data: action.payload.data
      }

    case RESTORE_FETCHED:
      return {
        ...state,
        data: action.payload.data
      }

    default:
      return state;
  }
}

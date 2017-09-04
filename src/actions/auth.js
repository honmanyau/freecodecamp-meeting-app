import firebase from '../firebase';



export const AUTH_USER = 'AUTH_USER';
export const AUTH_PROGRESS = 'AUTH_PROGRESS';

export function authListener() {
  return function(dispatch) {
    dispatch(authProgress(true));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
      }
      else {
        dispatch(authProgress(false));
      }
    });
  }
}

export function authUser(user) {
  return {
    type: AUTH_USER,
    payload: {
      user
    }
  }
}

export function authProgress(inProgress) {
  return {
    type: AUTH_PROGRESS,
    payload: {
      inProgress
    }
  }
}

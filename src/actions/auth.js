import firebase, { twitterAuthProvider } from '../firebase';

import { fetchUserData } from './fetch';



export const AUTH_USER = 'AUTH_USER';
export const AUTH_PROGRESS = 'AUTH_PROGRESS';

export function authListener() {
  return function(dispatch) {
    dispatch(authProgress(true));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
        dispatch(fetchUserData(user.uid));
      }

      dispatch(authProgress(false));
    });
  }
}

export function twitterSignIn() {
  return function(dispatch) {
    firebase.auth().signInWithRedirect(twitterAuthProvider)
      .then((result) => {
        if (result.user) {
          dispatch(authUser(result.user));
        }
      })
      .catch(error => console.log('Error occured when sining in with a third-party provider.', error));
  }
}

export function signOut() {
  return function(dispatch) {
    dispatch(authProgress(true));

    firebase.auth().signOut()
      .then(() => {
        dispatch(authUser(null));
        dispatch(authProgress(false));
      })
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

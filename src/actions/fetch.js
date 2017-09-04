import firebase from '../firebase';



export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';
export const FETCH_PROGRESS = 'FETCH_PROGRESS';
export const STORE_FETCHED = 'STORE_FETCHED';
export const RESTORE_FETCHED = 'RESTORE_FETCHED';
export const STORE_USER_DATA = 'STORE_USER_DATA';

export function fetchUserData(uid) {
  return function(dispatch) {
    firebase.database().ref(`/meeting-app/users/${uid}/old`).on('value', snapshot => {
      if (snapshot) {
        dispatch(storeUserData(snapshot.val()));
      }
    }, error => console.log('Error when fetching user data!', error));
  }
}

export function fetchRestaurants(city) {
  return function(dispatch) {
    dispatch(fetchProgress(true));

    const url = `https://freecodecamp-api.glitch.me/api/yelp/${city}`;

    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log(`Error occured when attempting to fetch from ${url}.  Status code: ${response.status}`)
        }

        response.json()
          .then(data => {
            dispatch(storeFetched(data));
            dispatch(fetchProgress(false));
          })
      })
      .catch(error => 'Error occured when attempting to fetch from ')
  }
}

export function fetchProgress(inProgress) {
  return {
    type: FETCH_PROGRESS,
    payload: {
      inProgress
    }
  }
}

export function storeFetched(data) {
  return {
    type: STORE_FETCHED,
    payload: {
      data
    }
  }
}

export function restoreFetched(data) {
  return {
    type: RESTORE_FETCHED,
    payload: {
      data
    }
  }
}

export function storeUserData(data) {
  return {
    type: STORE_USER_DATA,
    payload: {
      data
    }
  }
}

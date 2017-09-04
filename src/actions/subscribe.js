import firebase from '../firebase';



export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';

export function submitSubscription(rid, uid, going) {
  return function(dispatch) {
    const path = '/meeting-app/users/' + uid;

    firebase.database().ref(`/meeting-app/users/${uid}/new`).set({
      uid,
      rid,
      going
    })
  }
}

import firebase from '../firebase';



export const SUBMIT_SUBSCRIBE = 'SUBMIT_SUBSCRIBE';
export const SUBMITTING = 'SUBMITTING';

export function submitSubscription(rid, uid, going) {
  return function(dispatch) {
    dispatch(submitting(true));

    firebase.database().ref(`/meeting-app/users/${uid}/new`).push({
      uid,
      rid,
      going
    });
  }
}

export function submitting(inProgress) {
  return {
    type: SUBMITTING,
    payload: {
      inProgress
    }
  }
}

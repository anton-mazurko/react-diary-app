import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, signOut } from "firebase/auth";
import { GET_USER, USER_STATUS } from "../actionTypes";


export function getUser () {
  
  return dispatch => {
    const auth = getAuth();
    // show loading status before getting user to true
    dispatch({
      type: USER_STATUS,
      payload: true
    })
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      // show loading status to false
      dispatch({
        type: USER_STATUS,
        payload: false
      });
    });
  }
}


export function googleLogin() {
  const auth = getAuth();
  return dispatch => {
    signInWithPopup(auth, new GoogleAuthProvider())
  }
}

export function twitterLogin() {
  const auth = getAuth();
  return dispatch => {
    signInWithPopup(auth, new TwitterAuthProvider())
  }
}

export function logout () {
  const auth = getAuth();
  return dispatch => {
    signOut(auth)
  }
}
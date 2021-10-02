import {GET_NOTES, NOTES_STATUS} from '../actionTypes'
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { uuidv4 } from '../common';


// Web version 9: https://firebase.google.com/docs/database/web/read-and-write#web-version-9_1
export function getNotes() {
  const db = getDatabase();
  const notesRef = ref(db, '/notes');

  return dispatch => {
    dispatch({
      type: NOTES_STATUS,
      payload: true
    });

    onValue(notesRef, (snapshot) => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val()
      });
      // once notes are received show loading to false
      dispatch({
        type: NOTES_STATUS,
        payload: false
      });
    }, () => {
      dispatch({
        type: NOTES_STATUS,
        payload: -1
      });
    });
  };
}

export function saveNote (note) {
  const db = getDatabase();
  const noteId = uuidv4();
  return () => {
    set(ref(db, `/notes/${noteId}`), note);
  }
}

export function deleteNote (id) {
  const db = getDatabase();
  return () => {
    remove(ref(db, `/notes/${id}`))
  }
}
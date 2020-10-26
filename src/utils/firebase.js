/**
 * Refresh the token manually after 55 mins since it is
 * refreshed lazily by Firebase.
 * https://github.com/firebase/firebase-js-sdk/issues/2985
 * @param firebase
 * @returns {*}
 */
export const forceTokenRefresh = () => {
  const user = firebase.auth().currentUser;
  if (user) {
    return firebase.auth.currentUser.getIdToken(true);
  }
}

export const signInUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const signOutUser = () => {
  return firebase.auth().signOut();
}


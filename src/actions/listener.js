/* global firebase */

export function beginListening() {
  console.log("Listening has begun");

  let schoolRef = firebase.database().ref('schools/');
  schoolRef.on('value', function(snapshot) {
    return {type: 'SCHOOL_UPDATE', data: snapshot.val()};
  });

  let userRef = firebase.database().ref('users/');
  userRef.on('value', function (snapshot) {
    return {type: 'USERS_UPDATE', data: snapshot.val()}
  });

  let classRef = firebase.database().ref('classes/');
  classRef.on('value', (snapshot) => {
    return {type: 'CLASS_UPDATE', data: snapshot.val()}
  });

  let threadRef = firebase.database().ref('threads/');
  threadRef.on('value', (snapshot) => {
    return {type: 'THREAD_UPDATE', data: snapshot.val()}
  });

  let postRef = firebase.database().ref('posts/');
  postRef.on('value', (snapshot) => {
    return {type: 'POST_UPDATE', data: snapshot.val()}
  });

  return {type: "START_LISTENING"}
}
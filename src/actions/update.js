/* global firebase */

export function writeSchoolData(schoolId, name) {
  firebase.database().ref('schools/' + schoolId).set({
    school_name: name
  });
  return { type: "SET_SCHOOLClassCode" }
}

export function writeClassData(classId, schoolId, name) {
  firebase.database().ref(`classes/${schoolId}/${classId}`).set({
    class_name: name,
  });
  return { type: "SET_CLASS" }
}

export function writePostData(postId, schoolId, classId, userName, title, text) {
  firebase.database().ref(`posts/${schoolId}/${classId}/${postId}`).set({
    user_name: userName,
    title: title,
    post_text: text,
  });
  return { type: "SET_POST" }
}

export function writePostReply(replyId, postId, schoolId, classId, userName, text) {
  firebase.database().ref(`posts/${schoolId}/${classId}/${postId}/children/${replyId}`).set({
    user_name: userName,
    post_text: text
  });
  return { type: "SET_REPLY" }
}

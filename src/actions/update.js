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

export function writePostData(postId, schoolId, classId, userName, text, plagiarism = false) {
  firebase.database().ref(`posts/${schoolId}/${classId}/${postId}`).set({
    user_name: userName,
    post_text: text,
    marked_as_plagiarism: plagiarism
  });
  return { type: "SET_POST" }
}

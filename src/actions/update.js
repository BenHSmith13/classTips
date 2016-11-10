/* global firebase */

export function writeSchoolData(schoolId, name) {
  firebase.database().ref('schools/' + schoolId).set({
    school_name: name
  });
  return { type: "SET_SCHOOL" }
}

export function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
  return { type: "SET_USER" }
}

export function writeClassData(classId, schoolId, name) {
  firebase.database().ref('classes/' + classId).set({
    school_id: schoolId,
    class_name: name,
  });
  return { type: "SET_CLASS" }
}

export function writeThreadData(threadId, schoolId, classId, userId, title, text) {
  firebase.database().ref('threads/' + threadId).set({
    school_id: schoolId,
    class_id: classId,
    user_id: userId,
    thread_title: title,
    thread_text: text
  });
  return { type: "SET_THREAD" }
}

export function writePostData(postId, threadId, userId, parentId, text, plagiarism = false) {
  firebase.database().ref('posts/' + postId).set({
    thread_id: threadId,
    user_id: userId,
    parent_id: parentId,
    post_text: text,
    marked_as_plagiarism: plagiarism
  });
  return { type: "SET_POST" }
}


export function setSchool(schoolId){
  return {
    type: 'SELECT_SCHOOL',
    schoolId: schoolId
  }
}

export function setClass(classId) {
  return {
    type: 'SELECT_CLASS',
    classId: classId
  };
}
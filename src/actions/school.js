
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

export function setSchoolAndClass(schoolId, classId) {
  return {
    type: 'SELECT_SCHOOL_AND_CLASS',
    schoolId: schoolId,
    classId: classId
  }
}
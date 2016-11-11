const initialState = {
  schools: {},
  selectedSchool: '',
  classes: {},
  selectedClass: ''
};

export default function (state = initialState, action) {
  switch(action.type){
    case "SCHOOL_UPDATE":
      return {...state, ...{schools: action.data}};

    case "SELECT_SCHOOL":
      return {...state, ...{selectedSchool: action.schoolId}};

    case "CLASS_UPDATE":
      return {...state, ...{classes: action.data}};

    case "SELECT_CLASS":
      return {...state, ...{selectedClass: action.classId}};

    default:
      return state;
  }
}
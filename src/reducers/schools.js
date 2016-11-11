const initialState = {
  schools: {},
  selectedSchool: null
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch(action.type){
    case "SCHOOL_UPDATE":
      return {...state, ...{schools: action.data}};

    default:
      return state;
  }
}
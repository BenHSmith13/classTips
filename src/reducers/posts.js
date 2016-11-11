const initialState = {
  posts: {}
};

export default function (state = initialState, action) {
  switch(action.type){
    case "POST_UPDATE":
      return {...state, ...{posts: action.data}};

    default:
      return state;
  }
}
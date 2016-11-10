const initialState = {

};

export default function (state = initialState, action) {
  console.log(action.type);
  switch(action.type){
    default:
      return state;
  }
}
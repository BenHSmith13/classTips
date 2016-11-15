import _        from 'lodash';

const initialState = {
  posts: {},
  recent: []
};

export default function (state = initialState, action) {
  switch(action.type){
    case "POST_UPDATE":
      return {...state, ...{posts: action.data, recent: structureRecent(action.data)}};

    default:
      return state;
  }
}

function structureRecent(data) {
  let postData;
  _.forEach(data, (school, schoolCode) => {
    _.forEach(school, (course, courseCode) => {
      postData = _.map(course, (post) => {
        if(post.timestamp){
          return {
            title: post.title,
            timestamp: post.timestamp,
            school: schoolCode,
            course: courseCode
          }
        }
      });
    });
  });

  return _.orderBy(postData, 'timestamp');
}
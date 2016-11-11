import { combineReducers }  from 'redux';
import schools              from './schools';
import posts                from './posts';

const reducers = combineReducers({
  schools,
  posts
});

export default reducers;

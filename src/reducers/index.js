'use strict';

import { combineReducers }  from 'redux';
import schools              from './schools';

const reducers = combineReducers({
  schools
});

export default reducers;

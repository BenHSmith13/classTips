'use strict';

import { createStore, compose }   from 'redux';
import reducers                    from './reducers/index';

const store = createStore(reducers);
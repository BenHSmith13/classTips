'use strict';

import React    from 'react';
import { connect }  from 'react-redux';
import * as TestActions from '../actions/test';

const select = (state) => {

};

export class Filters extends React.Component{

  render(){
    return <div className="col-md-3">
      <h1>Filters</h1>
    </div>
  }
}

export default connect(select, TestActions)(Filters);
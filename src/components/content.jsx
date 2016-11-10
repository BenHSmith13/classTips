'use strict';

import React            from 'react';
import Recent           from './recent.jsx';
import Filters          from './filters.jsx';
import MyView           from './my_view.jsx';

export default class Content extends React.Component{


  render(){
    return <div className="container-fluid">
      <div className="row">
        <Filters/>
        <MyView/>
        <Recent/>
      </div>
    </div>
  }
}
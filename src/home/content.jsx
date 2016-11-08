'use strict';

import React            from 'react';
import Recent           from './recent.jsx';
import Filters          from './filters.jsx';
import MyView           from './my_view.jsx';

export default class Content extends React.Component{



  render(){
    return <div className="row">
      <div className=".col-md-3">
        <Filters/>
      </div>
      <div className=".col-md-7">
        <MyView/>
      </div>
      <div className=".col-md-2">
        <Recent/>
      </div>
    </div>
  }
}
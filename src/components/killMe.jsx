import React    from 'react';
import { connect }  from 'react-redux';
import * as UpdateActions from '../actions/update';

const select = (state) => {
  return {}
};

export class Filters extends React.Component{

  render(){
    return <div className="col-md-3">
      <h1>Filters</h1>
      <button onClick={() => this.props.writeSchoolData('WSU', 'Weber State University')}>Add School</button>
    </div>
  }
}

export default connect(select, UpdateActions)(Filters);
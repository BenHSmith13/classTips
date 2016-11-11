import React        from 'react';
import { connect }  from 'react-redux';
import _            from 'lodash';

const select = (state) => {
  console.log(state.schools.schools);
  return {
    schools: state.schools.schools
  }
};

export class Filters extends React.Component{

  getStyles(){
    return {
      buttons: {
        margin: '10px',
      }
    }
  }

  render(){
    const styles = this.getStyles();

    return <div>
      <select className="form-control">
        {_.map(this.props.schools, (school)=>{
          console.log(school);
          return <option>{school.school_name}</option>
        })}
      </select>
      <button className="btn btn-primary" style={styles.buttons}>Find Class</button>
      <button className="btn btn-primary" style={styles.buttons}>Find School</button>
    </div>
  }
}

export default connect(select, {})(Filters);
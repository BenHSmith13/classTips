import React                from 'react';
import { connect }          from 'react-redux';
import _                    from 'lodash';
import * as UpdateActions   from '../actions/update';
import * as SchoolActions   from '../actions/school';

const select = (state) => {
  return {
    schools: state.schools.schools,
    selectedSchool: state.schools.selectedSchool,
    classes: state.schools.classes[state.schools.selectedSchool],
    selectedClass: state.schools.selectedClass
  }
};

export class Filters extends React.Component{

  constructor(){
    super();
    this.state = {
      form: 'NONE',
      fieldOne: '',
      fieldTwo: ''
    }
  }

  addSchool(){
    this.props.writeSchoolData(this.state.fieldOne, this.state.fieldTwo);
    this.setState({
      form: 'NONE',
      fieldOne: '',
      fieldTwo: ''
    });
  }

  addClass(){
    this.props.writeClassData(this.state.fieldOne, this.props.selectedSchool, this.state.fieldTwo);
    this.setState({
      form: 'NONE',
      fieldOne: '',
      fieldTwo: ''
    });
  }

  getStyles(){
    return {
      container: {
        padding: '20px',
        backgroundColor: '#222'
      },
      buttons: {
        margin: '10px',
      },
      text: {
        color: 'white'
      }
    }
  }

  form(){
    const { form } = this.state;
    const styles = this.getStyles();

    if(form === 'SCHOOL'){
      return <div>
        <div className="form-group">
          <label htmlFor="schoolCode" style={styles.text}>School Code (IE: USU, WSU)</label>
          <input
            type="text"
            className="form-control"
            id="schoolCode"
            placeholder="USU"
            onChange={(e) => this.setState({fieldOne: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="schoolName" style={styles.text}>School Name</label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            placeholder="Utah State University"
            onChange={(e) => this.setState({fieldTwo: e.target.value})}
          />
        </div>
        <button className="btn btn-default" onClick={() => this.addSchool()}>Add School</button>
      </div>
    } else if(form === 'CLASS'){
      return <div>
        <div className="form-group">
          <label htmlFor="classCode" style={styles.text}>Class Code (IE: CS1400)</label>
          <input
            type="text"
            className="form-control"
            id="classCode"
            placeholder="CS1400"
            onChange={(e) => this.setState({fieldOne: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="className" style={styles.text}>Class Name</label>
          <input
            type="text"
            className="form-control"
            id="className"
            placeholder="Computer Science 1"
            onChange={(e) => this.setState({fieldTwo: e.target.value})}
          />
        </div>
        <button className="btn btn-default" onClick={() => this.addClass()}>Add Class</button>
      </div>
    } else return null;
  }

  render(){
    const styles = this.getStyles();

    return <div style={styles.container}>
      <div className="form-inline">
        <select
          className="form-control"
          onChange={(e) => this.props.setSchool(e.target.value)}
          value={this.props.selectedSchool}
        >
          <option value={null}>Select a School</option>
          {_.map(this.props.schools, (school, code)=>{
            return <option
              key={`SchoolOption${code}`}
              value={code}>
              {school.school_name}
            </option>
          })}
        </select>

        <select
          className="form-control"
          onChange={(e) => this.props.setClass(e.target.value)}
          value={this.props.selectedClass}
        >
          <option value={null}>Select a Class</option>
          {_.map(this.props.classes, (className, code) => {
            return <option
              key={`ClassOptions${code}`}
              value={code}>
              {className.class_name}
            </option>
          })}
        </select>
      </div>
      <button
        className="btn btn-primary"
        style={styles.buttons}
        onClick={() => this.setState({form: this.state.form === "SCHOOL" ? "NONE" : "SCHOOL"})}
      >
        Add School
      </button>
      <button
        className="btn btn-primary"
        style={styles.buttons}
        onClick={() => this.setState({form: this.state.form === "CLASS" ? "NONE" : "CLASS"})}
      >
        Add Class
      </button>
      {this.form()}
    </div>
  }
}

export default connect(select, {...UpdateActions, ...SchoolActions})(Filters);
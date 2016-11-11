import React              from 'react';
import { connect }        from 'react-redux';
import * as UpdateActions from '../actions/update';
import { guid }           from '../utils/id_generator';

const select = (state) => {
  return {
    schoolId: state.schools.selectedSchool,
    courseId: state.schools.selectedClass
  }
};

export class AddPost extends React.Component{

  constructor(){
    super();
    this.state = {
      title: '',
      name: '',
      post: '',
      checked: false
    }
  }

  submitPost(){
    const {schoolId, courseId} = this.props;
    this.props.writePostData(guid(), schoolId, courseId, this.state.name, this.state.title, this.state.post);
    this.setState({
      title: '',
      name: '',
      post: '',
      checked: false
    });
  }

  render(){
    return <div>
      <h1>Add Post</h1>
      <div className="form-horizontal">
        <div className="form-group">
          <label htmlFor="title" className="col-sm-2 control-label">Title</label>
          <div className="col-sm-10">
            <input
              onChange={(e) => this.setState({title: e.target.value})}
              value={this.state.title}
              type="text"
              className="form-control"
              id="title"
              placeholder="My Post Name"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="name" className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input
              onChange={(e) => this.setState({name: e.target.value})}
              value={this.state.name}
              type="text"
              className="form-control"
              id="name"
              placeholder="Ben Smith"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="postArea" className="col-sm-2 control-label">Post</label>
          <div className="col-sm-10">
            <textarea
              onChange={(e) => this.setState({post: e.target.value})}
              value={this.state.post}
              className="form-control"
              id="postArea"
              rows="3"
              placeholder="This is my question/advice"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={(e) => this.setState({checked: !this.state.checked})}/>
                I verify this post conforms to the standards of classTips.tech
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              onClick={() => this.submitPost()}
              className="btn btn-primary"
              disabled={this.state.checked ? '' : 'disabled'}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect(select, UpdateActions)(AddPost);

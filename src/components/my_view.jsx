import React    from 'react';
import { connect }  from 'react-redux';

const select = (state) => {
  return {
    posts: state.posts
  }
};

export class MyView extends React.Component{

  render(){
    return <div className="col-md-8">
      <h1>Add Post</h1>
      <div className="form-horizontal">
        <div className="form-group">
          <label for="title" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="title" placeholder="My Post Name"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Post</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="3" placeholder="This is my question/advice"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox"/>
                I verify this post conforms to the standards of classTips.tech
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn btn-default">Submit</button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect(select, {})(MyView);

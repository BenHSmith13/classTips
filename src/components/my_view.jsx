import React        from 'react';
import { connect }  from 'react-redux';
import AddPost      from './add_post.jsx';

const select = (state) => {
  return {
    posts: state.posts
  }
};

export class MyView extends React.Component{

  render(){
    return <div className="col-md-8">
      <AddPost/>
    </div>
  }
}

export default connect(select, {})(MyView);

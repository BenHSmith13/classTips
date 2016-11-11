import React        from 'react';
import { connect }  from 'react-redux';
import AddPost      from './add_post.jsx';
import Post         from './post.jsx';
import _            from 'lodash';

const select = (state) => {
  return {
    posts: state.posts.posts[state.schools.selectedSchool] ? state.posts.posts[state.schools.selectedSchool][state.schools.selectedClass] : {},
    showPosts: state.schools.selectedSchool && state.schools.selectedClass
  }
};

export class MyView extends React.Component{

  getStyle(){
    return {
      select: {
        color: 'white',
        backgroundColor: 'DarkSlateGray',
        padding: '40px'
      }
    }
  }

  render(){
    const styles = this.getStyle();
console.log(this.props.posts);
    return <div className="col-md-8">
      {this.props.showPosts ?
        [_.map(this.props.posts, (post, id) => <Post key={`post_${id}`} post={post} id={id} />),
        <AddPost/>]
        : <h1 style={styles.select}>
        Please Select a School and Class to Continue
      </h1>
      }
    </div>
  }
}

export default connect(select, {})(MyView);

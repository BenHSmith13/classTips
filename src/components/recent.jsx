import React              from 'react';
import { connect }        from 'react-redux';
import _                  from 'lodash';
import * as SchoolActions from '../actions/school';

const select = (state) => {
  return {
    recent: state.posts.recent.slice(0, 5)
  }
};

export class Recent extends React.Component{

  openPost(post){
    this.props.setSchoolAndClass(post.school, post.course);
  }

  getStyles(){
    return {
      recentPost: {
        padding: '3px 10px 10px',
        backgroundColor: 'LightBlue',
        borderRadius: '5px',
        cursor: 'pointer'
      },
      leftText: {
        textAlign: 'left'
      }
    }
  }

  render(){
    const styles = this.getStyles();

    return <div className="col-md-4">
      <h1>Recent</h1>
      <hr/>
      {_.map(this.props.recent, (post, id) => {
        return <div
          style={styles.recentPost}
          key={`recentPost${id}`}
          onClick={() => this.openPost(post)}>
          <h3>{post.title}</h3>
          <h5 style={styles.leftText}>{post.school}</h5>
          <h5 style={styles.leftText}>{post.course}</h5>
        </div>
      })}
    </div>
  }
}

export default connect(select, SchoolActions)(Recent);

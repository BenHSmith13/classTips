import React              from 'react';
import Reply              from './reply.jsx';
import * as UpdateActions from '../actions/update';
import { connect }        from 'react-redux';
import { guid }           from '../utils/id_generator';
import _                  from 'lodash';

const select = (state) => {
  return {
    schoolId: state.schools.selectedSchool,
    classId: state.schools.selectedClass
  }
};

export class Post extends React.Component{

  constructor(){
    super();
    this.state = {
      post: '',
      name: ''
    }
  }

  submitReply(){
    this.props.writePostReply(guid(), this.props.id, this.props.schoolId, this.props.classId, this.state.name, this.state.post);
  }

  getStyles(){
    return {
      container: {
        backgroundColor: 'lightGrey',
        padding: '5px 20px 20px',
        borderRadius: '5px',
        marginTop: '10px'
      },
      postText: {
        textAlign: 'left'
      },
      reply: {

      }
    }
  }

  render(){
    const { post, id } = this.props;
    const styles = this.getStyles();

    return <div style={styles.container}>
      <h3>{post.title}</h3>
      <h6>{post.user_name}</h6>
      <div style={styles.postText}>
        {post.post_text}
      </div>
      {_.map(post.children, (reply) => {
        return <Reply reply={reply}/>
      })}
      <hr/>
      <div style={styles.reply}>
        <div className="form-horizontal">
          <div className="form-group">
            <label htmlFor="postArea" className="col-sm-2 control-label">Reply</label>
            <div className="col-sm-10">
            <textarea
              onChange={(e) => this.setState({post: e.target.value})}
              value={this.state.post}
              className="form-control"
              id="postArea"
              rows="3"
              placeholder="Here is what I think about this."/>
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
                placeholder="Joe Schmo"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                onClick={() => this.submitReply()}
                className="btn btn-primary">
                Post Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect(select, UpdateActions)(Post);

/* global firebase */

import React          from 'react';
import Header         from './header.jsx';
import Content        from './content.jsx';
import SearchButtons  from './filters.jsx';
import { connect }    from 'react-redux';
import * as Listener  from '../actions/listener';


const select = () => {
  return {

  }
};

export class Home extends React.Component{

  componentDidMount(){
    let schoolRef = firebase.database().ref('schools/');
    schoolRef.on('value', (snapshot) => {
      this.props.update('SCHOOL_UPDATE', snapshot.val());
    });

    let classRef = firebase.database().ref('classes/');
    classRef.on('value', (snapshot) => {
      this.props.update('CLASS_UPDATE', snapshot.val());
    });

    let postRef = firebase.database().ref('posts/');
    postRef.on('value', (snapshot) => {
      this.props.update('POST_UPDATE', snapshot.val());
    });
  }

  getStyle(){
    return {
      body: {
        backgroundColor: 'slateGray',
        backgroundSize: '100vh 100vw',
        height: '100vh'
      }
    }
  }

  render(){
    const styles = this.getStyle();

    return <div style={styles.body}>
      <Header/>
      <SearchButtons/>
      <Content/>
    </div>
  }
}

export default connect(select, Listener)(Home);

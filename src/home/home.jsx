import React        from 'react';
import Header       from './header.jsx';

export default class Home extends React.Component{

  getStyle(){
    return {
      body: {
        backgroundColor: 'slateGray',
        backgroundSize: '100vh 100vw',
      }
    }
  }

  render(){
    const styles = this.getStyle();

    return <div style={styles.body}>
      <Header/>
    </div>
  }
}
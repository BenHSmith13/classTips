import React        from 'react';
import Header       from './header.jsx';
import Content      from './content.jsx';
import SearchButtons  from './search_buttons.jsx';

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
      <SearchButtons/>
      <Content/>
    </div>
  }
}
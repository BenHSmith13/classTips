import React          from 'react';
import Header         from './header.jsx';
import Content        from './content.jsx';
import SearchButtons  from './search_buttons.jsx';
import { connect }    from 'react-redux';
import * as Listener  from '../actions/listener';


const select = () => {
  return {

  }
};

export class Home extends React.Component{

  componentDidMount(){
    // debugger;
    this.props.beginListening();
  }

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

export default connect(select, Listener)(Home);

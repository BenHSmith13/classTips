import React          from 'react';
import ReactDOM       from 'react-dom';
import App            from './App';
import './index.css';
import { Provider }   from 'react-redux';
import Store          from './store';

class Root extends React.Component{
  render(){
    const {store} = this.props;
    return <Provider store={store}>
      <App />
    </Provider>
  }
}


ReactDOM.render(
  <Root store={Store}/>,
  document.getElementById('root')
);

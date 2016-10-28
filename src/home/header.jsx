import React          from 'react';
import logo           from '../assets/logo.svg';
import SearchButtons  from './search_buttons.jsx';

export default class Header extends React.Component{
  render(){
    return <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Class Tips</h2>
      <SearchButtons/>
    </div>
  }
}
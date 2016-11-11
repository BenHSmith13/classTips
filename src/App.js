/* global firebase */

import React, { Component } from 'react';
import './App.css';
import Home                 from './components/home.jsx';
import { firebaseConfig}    from './api';

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

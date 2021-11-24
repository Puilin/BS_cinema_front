import './App.css';
import React, { Component } from 'react';
import Admin from './admin';
import Frame from './components/frame';
import {  Route , Routes  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Route exact path = "/" element={<Frame/>} />
        <Route path = "/admin" element={<Admin/>} />
        </Routes>
      </div>
    );
  }
}

export default App;

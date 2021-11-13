import './App.css';
import React, { Component } from 'react';
import {  BrowserRouter, Route, Switch  } from 'react-router-dom';
import Store from './components/Store';

//import Movie from './components/Movie';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
        
        <Route path="/Store" component={Store} />
        {/* <Route path="/Movie" component={Movie} /> */}
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MainApp from './components/MainApp/MainApp';

class App extends Component {
  state = {
    loader: false,
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/app' component={MainApp} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

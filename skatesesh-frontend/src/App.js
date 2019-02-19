import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

class App extends Component {

  state = {
    user: {}
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home />)} />
          <Route exact path='/login' render={(props) => (<Login />)} />
          <Profile exact path='/profile' render={(props) => (<Profile user={this.state.user}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;

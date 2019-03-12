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

  submitHandler = (e, user) => {
    e.preventDefault()
    console.log("reached")
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accepts' : 'application/json',
      },
      body: JSON.stringify({
        user: user
      })
    }).then(resp => resp.json())
      .then(json => {
        localStorage.setItem('token', json.jwt)
        let token = localStorage.getItem('token')
        fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          "Content-Type": "application/json",
          "Accepts":  "application/json",
          Authorization: token
        }
      })
        .then(console.log)
    })

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => (<Home />)} />
          <Route exact path='/login' render={(props) => (<Login submitHandler={this.submitHandler}/>)} />
          <Profile exact path='/profile' render={(props) => (<Profile user={this.state.user}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;

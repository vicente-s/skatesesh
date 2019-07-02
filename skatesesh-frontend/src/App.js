import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import SkateTeams from './components/Teams'
import Skaters from './components/Skaters'
import Shop from './components/Shop'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    user: {},
  }

  submitHandler = (e, user) => {
    e.preventDefault()
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
        fetch("http://localhost:3000/api/v1/profile", {
        headers: {
          "Content-Type": "application/json",
          "Accepts":  "application/json",
          Authorization: token
        }
      }).then(resp => resp.json())
        .then(json => {
          this.setState({
            user: json
          })
        })
    })
    window.location.href = "/profile"
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' render={ props => <Home /> } />
          <Route exact path='/teams' render={ props => <SkateTeams /> }/>
          <Route exact path='/skaters' render={ props => <Skaters /> } />
          <Route exact path='/shop' render={ props => <Shop />} />
          <Route exact path='/login' render={ props => <Login submitHandler={this.submitHandler}/> } />
          <Profile exact path='/profile' render={ props => <Profile user={this.state.user}/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

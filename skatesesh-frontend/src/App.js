import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Sponsors from './components/Sponsors'
import Athletes from './components/Athletes'


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
          <Route exact path='/sponsors' render={ props => <Sponsors /> }/>
          <Route exact path='/athletes' render={ props => <Athletes /> } />
          <Route exact path='/login' render={ props => <Login submitHandler={this.submitHandler} /> } />
          <Route exact path='/profile' render={ props => <Profile user={this.state.user}/> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

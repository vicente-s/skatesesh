import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Sponsors from './components/Sponsors'
import SponsorInfoPage from './components/SponsorInfoPage'
import Athletes from './components/Athletes'
import AthleteInfoPage from './components/AthleteInfoPage'
import Spots from './components/Spots'


class App extends Component {

  state = {
    user: {},
    athlete: {
      first_name: "Mike Mo",
      stance: "Regular",
      sponsors: ["Girl", "Royal", "Spitfire","MOB","Bones Swiss","Diamond"]
    },
    sponsor: {
      name: "Nike SB",
      image: "http://getwallpapers.com/wallpaper/full/4/3/7/636418.jpg",
      website: "https://www.nikesb.com/"
    }
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
          <Route exact path='/sponsors/nike-sb' render={ props => <SponsorInfoPage sponsor={this.state.sponsor} /> } />
          <Route exact path='/athletes' render={ props => <Athletes /> } />
          <Route exact path='/athletes/1' render = { props => <AthleteInfoPage athlete = {this.state.athlete}/>} />
          <Route exact path='/login' render={ props => <Login submitHandler={this.submitHandler} /> } />
          <Route exact path='/spots' render={ props => <Spots /> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class Home extends Component {
  render() {
    return   (
        <div className="container-fluid">
          <div className="navbar">
            <button className="btn navbarButton">button</button>
          </div>
          <SignUpForm />
        </div>
    )
  }
}

export default Home

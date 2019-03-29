import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class Home extends Component {
  render() {
    return   (
      <div className="App" >
        <div className="navbar">
          <button className="navbarButton btn-default">skateSesh</button>
          <button className="navbarButton btn-default"><Link to="login">Login</Link></button>
        </div>
        <div className="formContainer">
          <SignUpForm />
        </div>
      </div>
    )
  }
}

export default Home

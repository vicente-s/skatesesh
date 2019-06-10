import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class Home extends Component {
  render() {
    return   (
      <div className="App" >
        <div className="navbar">
          <button className="btn">skateSesh</button>
          <button className="btn"><Link to="login">Login</Link></button>
        </div>
        <SignUpForm />
      </div>
    )
  }
}

export default Home

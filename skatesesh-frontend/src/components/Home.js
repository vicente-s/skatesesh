import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SignUpForm from './SignUpForm'

class Home extends Component {
  render() {
    return   (
      <div>
        <div className="WelcomeBar">
        skatesesh
        <Link className="Link" to="login">Login</Link>
        </div>
          <section className="Container">
            <div className="AboutUs">
            <h1>About</h1>
            </div>
            <div className="SignUpContainer">
            <h1>Sign Up</h1>
            <SignUpForm />
            </div>
          </section>
      </div>
    )
  }
}

export default Home

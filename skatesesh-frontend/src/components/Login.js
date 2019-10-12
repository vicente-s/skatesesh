import React, {Component} from 'react'
import google_icon from '../google_icon.png'

class Login extends Component {

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <form className="login-form">
            Login<hr/>
            <label for="email" />Email:<br/>
            <input type="email" name="email" /><br/><br/>
            <label for="password" />Password:<br/>
            <input type="password" name="password"/><br/><br/>
            <input type='submit' value="Login"/>
          </form>
          <br/>
          <div className="one-click-sign-in">
            Sign in with: <button onClick={() => alert("this button should sign you in with google")}><img className="social-icon" src={google_icon}/></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

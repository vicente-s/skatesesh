import React, {Component} from 'react'
import google_icon from '../google_icon.png'

class Login extends Component {
  state = {
    username: "",
    password:""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className="LoginPage">
        <div className="formContainer">
          <h3>Log In</h3>
          <hr/>
          <form onSubmit={(e) => this.props.submitHandler(e, this.state)}>
            <h5>UserName</h5>
            <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.changeHandler}/><br/>
            <h5>Password</h5>
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/><br/>
            <input type="submit" value="Login" className="btn btn-info"/>
          </form>
          <hr/>
          Sign in with: <a href=""><img src={google_icon} className="website-icon" alt="Google Logo"/></a>
        </div>
      </div>
    )
  }
}

export default Login

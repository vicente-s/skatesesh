import React, {Component} from 'react'

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
      <div>
        <div className="navbar">
          <button className="navbarButton">Sign Up</button>
        </div>
        <div className="loginFormContainer">
          <form onSubmit={(e) => this.props.submitHandler(e, this.state)}>
            <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.changeHandler}/><br/>
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/><br/>
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    )
  }
}

export default Login

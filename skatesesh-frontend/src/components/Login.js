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
        <div className="loginFormContainer">
          <form onSubmit={(e) => this.props.submitHandler(e, this.state)}>
            <h5>UserName</h5>
            <input type="text" name="username" placeholder="UserName" value={this.state.username} onChange={this.changeHandler}/><br/>
            <h5>Password</h5>
            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/><br/>
            <input type="submit" value="Login" className="btn btn-info"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Login

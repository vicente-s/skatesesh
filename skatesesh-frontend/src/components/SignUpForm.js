import React, {Component} from 'react'

class SignUpForm extends Component {

  state = {
    username: "",
    password: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  createUser = (e, user) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method:'Post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'aaplication/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    }).then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return   (
        <div className="SignUpForm">
          <form onSubmit={(e) => this.createUser(e, this.state)}>
            <br/>
            <h5>Username</h5>
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler}/><br/>
            <h5>Password</h5>
            <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler}/><br/>
            <br/>
            <input type="submit" value="Sign Up" className="btn btn-success"/>
            <br/>
          </form>
        </div>
    )
  }
}

export default SignUpForm

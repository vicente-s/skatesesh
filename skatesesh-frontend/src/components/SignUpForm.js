import React, {Component} from 'react'

class SignUpForm extends Component {

  state = {
    username: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  createUser = (e, user) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method:'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.user
      })
    }).then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return   (
      <form className="SignUpForm" onSubmit={(e) => this.createUser(e, this.state)}>
        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler}/><br/>
        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default SignUpForm

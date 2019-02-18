import React, {Component} from 'react'

class SignUpForm extends Component {
  render() {
    return   (
      <form className="SignUpForm" onSubmit={this.createUser}>
        <input type="text" placeholder="username" name="username" value={this.username} onChange={this.changeHandler}/><br/>
        <input type="text" placeholder="email" name="email" value={this.email} onChange={this.changeHandler}/><br/>
        <input type="text" placeholder="password" name="password" value={this.password} onChange={this.changeHandler}/><br/>
        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

export default SignUpForm

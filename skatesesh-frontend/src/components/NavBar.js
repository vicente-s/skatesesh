import React, {Component} from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav className= "navbar">
        <a href="/spots" className="nav-link text-white">Spots</a>
        <a href="/sponsors" className="nav-link text-white">Sponsors</a>
        <a href="/" className="nav-link text-white">Home</a>
        <a href="/athletes" className="nav-link text-white">Athletes</a>
        <a href="/login" className="nav-link text-white">Log In</a>
      </nav>
    )
  }
}

import React, {Component} from 'react'

export default class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">SkateSesh</a>
        <a className="nav-link" href="/shop">Shop</a>
        <a className="nav-link" href="/teams">Teams</a>
        <a className="nav-link" href="/skaters">Skaters</a>
        <a className="nav-link" href="/profile">Nearby Parks</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
  }
}

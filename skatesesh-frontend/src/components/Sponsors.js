import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SponsorCard from './SponsorCard'


export default class Sponsors extends Component {

  state = {
    sponsors: []
  }

  componentWillMount() {
    fetch('https://skatesesh.herokuapp.com/sponsors')
      .then(resp => resp.json())
      .then(json => this.setState({ sponsors: json })
    )
  }


  render() {

    let sponsors = this.state.sponsors.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor}/>)
    return (
        <div className="container sponsors">
          <div className="row">
            {sponsors}
          </div>
        </div>
    )
  }
}

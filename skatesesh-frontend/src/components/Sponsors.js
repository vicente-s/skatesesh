import React, { Component } from 'react'
import SponsorCard from './SponsorCard'


export default class Sponsors extends Component {

  state = {
    sponsors: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/teams')
      .then(resp => resp.json())
      .then(json => this.setState({ sponsors: json })
    )
  }


  render() {
    console.log(this.state.sponsors)
    let sponsors = this.state.sponsors.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor}/>)
    return (
        <div className="container">
          <div className="row">
            {sponsors}
          </div>
        </div>
    )
  }
}

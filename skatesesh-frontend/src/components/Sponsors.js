import React, {Component} from 'react'
import SponsorCard from './SponsorCard'


export default class Sponsors extends Component {

  render() {

    let sponsors = this.props.teams.map(sponsor => <SponsorCard key={sponsor.id} sponsor={sponsor}/>)
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
            {sponsors}
          </div>
        </div>
      </div>
    )
  }
}

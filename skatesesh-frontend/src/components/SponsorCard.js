import React, {Component} from 'react'

export default class SponsorCard extends Component {
  render() {
    return (
        <div className="col-4">
          <div className="card bg-dark text-white mb-3 athlete-card">
            <img src={this.props.sponsor.img} className="card-img" alt="..."/>
          </div>
        </div>
    )
  }
}

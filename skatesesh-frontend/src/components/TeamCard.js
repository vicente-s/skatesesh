import React, {Component} from 'react'

export default class TeamCard extends Component {
  render() {
    return (
        <div className="col-4">
          <div className="card bg-dark text-white mb-3">
            <img src={this.props.team.img} className="card-img" alt="..."/>
            <h5 className="card-title">{this.props.team.name}</h5>
          </div>
        </div>
    )
  }
}

import React, {Component} from 'react'

export default class TeamCard extends Component {
  render() {
    return (
        <div className="col-4">
          <div className="card bg-dark text-white mb-3 skaterCard">
            <img src={this.props.team.img} className="card-img" alt="..."/>
            <button onClick={(e) => this.props.selectTeam(e, this.props.team)}><h5 className="card-title">{this.props.team.name}</h5></button>
          </div>
        </div>
    )
  }
}

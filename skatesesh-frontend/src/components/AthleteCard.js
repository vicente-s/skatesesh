import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class AthleteCard extends Component {
  render() {
    return (
      <div className="athlete-card col-4">
        <img src={this.props.athlete.img} className="card-img" alt={this.props.athlete.name}/>
        <p>{this.props.athlete.name}</p>
      </div>
    )
  }
}

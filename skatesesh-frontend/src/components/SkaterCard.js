import React, {Component} from 'react'

export default class SkaterCard extends Component {
  render() {
    console.log(this.props)
    return (
          <div className="card col-2 mb-3 ml-4">
            <img src={this.props.skater.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{this.props.skater.first_name} {this.props.skater.last_name}</h5>
              <a href="" className="btn btn-info"> More Info </a>
            </div>
          </div>
    )
  }
}

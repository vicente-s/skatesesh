import React, {Component} from 'react'

export default class Skaters extends Component {

  state = {
    skaters: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/skaters')
      .then(resp => resp.json())
      .then(json => this.setState({ skaters: json})
    )
  }


  render() {
    let skaters = this.state.skaters.map( skater => <div>{skater.first_name} {skater.last_name}</div>)
    return(
      <div>
        <br/>
        <br/>
        <br/>
        {skaters}
      </div>
    )
  }
}

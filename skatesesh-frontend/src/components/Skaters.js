import React, {Component} from 'react'
import SkaterCard from './SkaterCard'

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
    let skaters = this.state.skaters.map( skater => <SkaterCard key={skater.id} skater={skater}/>)
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
            {skaters}
          </div>
        </div>
      </div>
    )
  }
}

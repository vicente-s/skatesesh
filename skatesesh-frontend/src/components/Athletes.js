import React, {Component} from 'react'
import AthleteCard from './AthleteCard'

export default class Athletes extends Component {

  state = {
    athletes: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/skaters')
      .then(resp => resp.json())
      .then(json => this.setState({ athletes: json })
    )
  }

  render() {
    let athletes = this.state.athletes.map( athlete => <AthleteCard key={athlete.id} athlete={athlete}/>)
    return(
      <div>
        <div className="container">
          <div className="row">
            {athletes}
          </div>
        </div>
      </div>
    )
  }
}

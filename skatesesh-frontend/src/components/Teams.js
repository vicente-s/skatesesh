import React, {Component} from 'react'
import TeamCard from './TeamCard'


export default class Teams extends Component {

  state = {
    teams: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/teams')
      .then(resp => resp.json())
      .then(json => this.setState({ teams: json}))
  }

  render() {
    let teams = this.state.teams.map( team => <TeamCard key={team.id} team={team} />)
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
            {teams}
          </div>
        </div>
      </div>
    )
  }
}

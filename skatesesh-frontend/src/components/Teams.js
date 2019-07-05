import React, {Component} from 'react'

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
    let teams = this.state.teams.map( team => <div> {team.name} </div>)
    return (
      <div>
        <br/>
        <br/>
        <br/>
        {teams}
      </div>
    )
  }
}

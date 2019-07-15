import React, {Component} from 'react'
import TeamCard from './TeamCard'


export default class Teams extends Component {

  render() {

    let teams = this.props.teams.map( team => <TeamCard key={team.id} team={team} selectTeam={this.props.selectTeam}/>)
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

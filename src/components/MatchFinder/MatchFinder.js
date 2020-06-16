import React, { Component } from 'react'
import Calendar from './Calendar'
import League from './League'
import { Route } from 'react-router-dom'

class MatchFinder extends Component {
    render() {
        const { setRange, setLeagueId, leagueId } = this.props
        return (
            <div>
                <League setLeagueId={setLeagueId} leagueId={leagueId} />
                <Calendar
                    props={this.props}
                    search={this.props.location.search}
                    setRange={setRange}
                />
            </div>
        )
    }
}

export default MatchFinder

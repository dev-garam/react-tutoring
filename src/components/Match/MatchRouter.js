import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Match from './MatchList'

class MatchRouter extends Component {
    componentDidMount() {
        this.pathnameToNum(this.props.location.pathname)
    }

    render() {
        const { range, leagueId } = this.props
        return (
            <div>
                <Match range={range} leagueId={leagueId} />
            </div>
        )
    }
}

export default MatchRouter

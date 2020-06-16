import React, { Component } from 'react'
import MatchTemplate from './MatchTemplate/MatchTemplate'
import MatchFinder from './MatchFinder'
import Match from './Match'
import dateFormatter from '../utils/dateFormatter'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    state = {
        range: {
            startDate: '2020-02-01',
            endDate: '2020-03-01',
        },
        leagueId: 148,
    }

    handleRange = (range) => {
        const startDate = dateFormatter(range[0])
        const endDate = dateFormatter(range[1])
        this.setState({
            range: {
                startDate,
                endDate,
            },
        })
    }

    handleLeagueId = (leagueId) => {
        this.setState({
            leagueId,
        })
    }

    render() {
        const { range, leagueId } = this.state
        return (
            <div>
                <Switch>
                    <Route
                        path="/"
                        render={(props) => (
                            <MatchTemplate
                                header={
                                    <MatchFinder
                                        {...props}
                                        setRange={this.handleRange}
                                        setLeagueId={this.handleLeagueId}
                                        leagueId={leagueId}
                                    />
                                }
                            >
                                <Match
                                    {...props}
                                    setLeagueId={this.handleLeagueId}
                                    setRange={this.handleRange}
                                    range={range}
                                    leagueId={leagueId}
                                />
                            </MatchTemplate>
                        )}
                    ></Route>
                    <Route
                        path="/:match"
                        render={(props) => (
                            <MatchTemplate
                                header={
                                    <MatchFinder
                                        {...props}
                                        setRange={this.handleRange}
                                        setLeagueId={this.handleLeagueId}
                                        leagueId={leagueId}
                                    />
                                }
                            >
                                <Match
                                    {...props}
                                    setLeagueId={this.handleLeagueId}
                                    setRange={this.handleRange}
                                    range={range}
                                    leagueId={leagueId}
                                />
                            </MatchTemplate>
                        )}
                    ></Route>
                    <Route
                        render={() => (
                            <h2 style={{ textAlign: 'center' }}>404 NOT FOUND..</h2>
                        )}
                    />
                </Switch>
            </div>
        )
    }
}

export default App

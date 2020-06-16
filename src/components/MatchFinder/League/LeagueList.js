import React, { Component } from 'react'
import LeagueItem from './LeagueItem'
import './LeagueList.scss'
import { Link } from 'react-router-dom'

const leagueTypes = [
    {
        league_name: '프리미어 리그',
        league_id: 148,
        league_path: '/epl',
    },
    {
        league_name: '라리가',
        league_id: 468,
        league_path: '/laliga',
    },
    {
        league_name: '세리에 A',
        league_id: 262,
        league_path: '/serie',
    },
    {
        league_name: '분데스리가',
        league_id: 196,
        league_path: '/bundes',
    },
    {
        league_name: '리그 앙',
        league_id: 176,
        league_path: '/ligue1',
    },
    {
        league_name: '챔피언스리그',
        league_id: 149,
        league_path: '/chams',
    },
]

class LeagueList extends Component {
    render() {
        const { setLeagueId, leagueId } = this.props
        return (
            <div>
                {
                    <ul className="leagueList-wrapper">
                        {leagueTypes.map((league) => {
                            return (
                                <Link
                                    key={league.league_id}
                                    className="leagueList"
                                    to={league.league_path}
                                >
                                    <LeagueItem
                                        league_name={league.league_name}
                                        league_id={league.league_id}
                                        selected={league.league_id === leagueId}
                                        setLeagueId={setLeagueId}
                                    />
                                </Link>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}

export default LeagueList

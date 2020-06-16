import React, { Component } from 'react'
import axios from 'axios'
import Match from './Match'
import pathParsing from '../../utils/pathParsing'
import searchToRange from '../../utils/setRange'

class MatchList extends Component {
    state = {
        loading: false,
        data: null,
    }

    getData = async () => {
        const { startDate, endDate } = this.props.range
        const { leagueId, location, setLeagueId, setRange } = this.props
        pathParsing(location.pathname, setLeagueId)
        searchToRange(location.search, setRange)

        const params = new URLSearchParams(location.search)
        let to = params.get('to')
        let from = params.get('from')
        if (!to) {
            to = '2020-02-01'
        }

        if (!from) {
            from = '2020-03-01'
        }

        try {
            this.setState({
                loading: true,
            })
            const apikey =
                '2b8917f45be384999b5e9f0908d2f8c7bdbf855ca430b6fdea359768fa3359eb'
            const url = `https://apiv2.apifootball.com/?action=get_events&from=${to}&to=${from}&league_id=${leagueId}&APIkey=${apikey}`
            const response = await axios.get(url)
            this.setState({
                data: response.data,
            })
        } catch (e) {
            console.error(e)
        }
        this.setState({
            loading: false,
        })
    }

    componentDidMount() {
        this.getData()
    }

    // componentWillMount() {
    //     const { location, setLeagueId } = this.props
    //     if (location.pathname !== '/') {
    //         pathParsing(location.pathname, setLeagueId)
    //     }
    // }

    componentDidUpdate(prevProps, prevState) {
        const { range, leagueId, location } = this.props
        if (
            prevProps.range !== range ||
            prevProps.leagueId !== leagueId ||
            prevProps.location.pathname !== location.pathname ||
            prevProps.location.search !== location.search
        ) {
            this.getData()
        }
    }

    render() {
        const { data, loading } = this.state
        return (
            <div>
                {loading && <h2 style={{ textAlign: 'center' }}>data loading..</h2>}
                {!loading &&
                    data &&
                    !data.error &&
                    data.map((d) => <Match key={d.match_id} data={d} />)}
            </div>
        )
    }
}

export default MatchList

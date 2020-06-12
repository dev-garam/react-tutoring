import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

class App extends Component {
    state = {
        date: new Date(),
        birthday: '',
        data: '',
    }

    formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear()

        if (month.length < 2) month = '0' + month
        if (day.length < 2) day = '0' + day

        return [year, month, day].join('-')
    }

    componentDidMount() {
        const birthday = this.formatDate(this.state.date)
        this.setState({
            birthday,
        })
    }

    onChange = (date) => {
        const birthday = this.formatDate(date)
        this.setState({ date, birthday })
    }

    lottoClick = () => {
        axios
            .all([
                axios.get('http://askat.me:8000/api/lotto1'),
                axios.get('http://askat.me:8000/api/lotto2'),
            ])
            .then(
                axios.spread((lotto1, lotto2) => {
                    let dump = lotto1.data.concat(lotto2.data)
                    console.log(dump)
                    console.log(typeof dump)
                    this.setState({
                        data: dump.join(' '),
                    })
                })
            )
            .catch((error) => {
                console.error(error)
            })
    }

    FortuneClick = () => {
        const { birthday } = this.state
        const URL = 'http://askat.me:8000/api/fortune/' + birthday

        axios
            .get(URL)
            .then((res) => {
                console.log(res)
                this.setState({
                    data: res.data,
                })
            })
            .catch((error) => {})
    }
    BadClick = () => {
        axios
            .get('http://askat.me:8000/api/bad')
            .then((res) => {
                this.setState({
                    data: res.data,
                })
            })
            .catch((error) => {
                console.log(error)
                alert('oooops!!')
            })
    }

    cache = setupCache({
        maxAge: 15 * 60 * 1000,
    })

    api = axios.create({
        adapter: this.cache.adapter,
    })

    SlowClick = () => {
        this.api({
            url: 'http://askat.me:8000/api/slow',
            method: 'get',
        }).then(async (res) => {
            this.setState({
                data: res.data,
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.lottoClick}>Lotto</button>
                <button onClick={this.FortuneClick}>Fortune</button>
                <Calendar
                    className="calendar"
                    onChange={this.onChange}
                    value={this.state.date}
                />

                <button onClick={this.BadClick}>Bad</button>
                <button onClick={this.SlowClick}>Slow</button>
                <br />
                {this.state.data && <div>{this.state.data}</div>}
            </div>
        )
    }
}

export default App

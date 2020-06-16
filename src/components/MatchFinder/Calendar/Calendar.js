import React, { Component } from 'react'
import ReactCalendar from 'react-calendar'
import './Calendar.scss'
import dataFormatter from '../../../utils/dateFormatter'
import { useHistory } from 'react-router-dom'

class Calendar extends Component {
    state = {
        date: null,
    }

    handleChange = (date) => {
        this.setState({
            date,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.setRange(this.state.date)
        const to = dataFormatter(this.state.date[0])
        const from = dataFormatter(this.state.date[1])

        const search = `?to=${to}&from=${from}`
        this.props.props.history.push(search)
    }

    componentDidMount() {
        const search = this.props.search
        const params = new URLSearchParams(search)
        const to = params.get('to')
        const from = params.get('from')

        if (to && from) {
            const stDate = new Date(to)
            const edDate = new Date(from)
            this.setState({
                date: {
                    stDate,
                    edDate,
                },
            })
        }
    }

    render() {
        return (
            <div className="calendar">
                <ReactCalendar
                    className="react-calendar"
                    onChange={this.handleChange}
                    selectRange={true}
                />
                <button className="calender-button" onClick={this.handleSubmit}>
                    검색
                </button>
            </div>
        )
    }
}

export default Calendar

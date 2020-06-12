import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

class App extends Component {
    state = {
        date: new Date(),
        birthday: '',
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

    render() {
        return (
            <div>
                <button>버튼 1</button>
                <Calendar
                    className="calendar"
                    onChange={this.onChange}
                    value={this.state.date}
                />
                <button>버튼 2</button>
                <button>버튼 3</button>
                <button>버튼 4</button>
                <button>버튼 5</button>
            </div>
        )
    }
}

export default App

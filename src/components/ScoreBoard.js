import React, { Component } from 'react'

class ScoreBoard extends Component {
    render() {
        const { score, max } = this.props
        return (
            //TODO

            <div>
                Current: {score} / {max}
            </div>
        )
    }
}

export default ScoreBoard

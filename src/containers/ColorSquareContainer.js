import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../store/modules/counter'
import ColorSquare from '../components/ColorSquare'

class ColorSquareContainer extends Component {
    render() {
        const { color, changeColor, number } = this.props
        return <ColorSquare selected={color} onSelect={changeColor} number={number} />
    }
}

const mapStateProps = (state) => ({
    color: state.counter.color,
    number: state.counter.number,
})

const mapDispatchProps = (dispatch) => ({
    changeColor: (color) => dispatch(changeColor(color)),
})

export default connect(mapStateProps, mapDispatchProps)(ColorSquareContainer)

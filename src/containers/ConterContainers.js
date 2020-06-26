import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { increment, decrement } from '../store/modules/counter'

import * as CounterActions from '../store/modules/counter'
import Counter from '../components/Counter'
import { bindActionCreators } from 'redux'

class ConterContainers extends Component {
    render() {
        const { number, counterActions, color } = this.props
        return (
            <Counter
                number={number}
                increment={counterActions.increment}
                decrement={counterActions.decrement}
                color={color}
            ></Counter>
        )
    }
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
    color: state.counter.color,
})

const mapDispatchToProps = (dispatch) => ({
    counterActions: bindActionCreators(CounterActions, dispatch),
})

// const mapDispatchToProps = {
//     increment,
//     decrement,
// }

// const mapDispatchToProps = (dispatch) => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(ConterContainers)

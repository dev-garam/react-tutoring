import React, { Component } from 'react'
import { connect } from 'react-redux'
import ColorList from '../components/ColorList'
import colorList, * as ColorListActions from '../store/modules/colorList'
import { bindActionCreators } from 'redux'

class ColorListContainer extends Component {
    handleChange = (e) => {
        const { changeInput } = this.props.colorListActions
        changeInput(e.target.value)
    }

    handleInsert = (e, input) => {
        e.preventDefault()
        const { insert } = this.props.colorListActions
        insert(input)
    }
    handleUpdate = (id) => {
        const { update } = this.props.colorListActions
        update(id)
    }
    handleRemove = (e, id) => {
        const { remove } = this.props.colorListActions
        e.preventDefault()
        remove(id)
    }
    render() {
        const { list, input } = this.props

        return (
            <ColorList
                list={list}
                input={input}
                ColorListActions={ColorListActions}
                setChange={this.handleChange}
                setInsert={this.handleInsert}
                setUpdate={this.handleUpdate}
                setRemove={this.handleRemove}
            />
        )
    }
}

const mapDispatchProps = (dispatch) => ({
    colorListActions: bindActionCreators(ColorListActions, dispatch),
})

export default connect(
    ({ colorList }) => ({
        list: colorList.list,
        input: colorList.input,
    }),
    mapDispatchProps
)(ColorListContainer)

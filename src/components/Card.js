import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    handleToggle = () => {}
    render() {
        //TODO: implement me
        const { card, onToggle } = this.props
        const { key, opened, value } = card
        return (
            <button
                className="Card"
                disabled={card.opened}
                onClick={() => onToggle(key, value)}
            >
                {opened ? value : '?'}
                {/* {value} */}
            </button>
        )
    }
}
export default Card

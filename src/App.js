import React, { Component } from 'react'
import './App.css'
import ColorList from './components/ColorList'
import ColorSquare from './components/ColorSquare'
import ConterContainers from './containers/ConterContainers'
import ColorListContainers from './containers/ColorListContainer'
import ColorSquareContainer from './containers/ColorSquareContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <ConterContainers />
                <ColorSquareContainer />
                <ColorListContainers />
            </div>
        )
    }
}

export default App

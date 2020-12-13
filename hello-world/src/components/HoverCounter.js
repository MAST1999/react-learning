import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const { counter, incrementCounter, name } = this.props
        return (
            <h1 onMouseOver={incrementCounter}>
                Hello {name}! {counter}
            </h1>
        )
    }
}

export default withCounter(HoverCounter, 3)

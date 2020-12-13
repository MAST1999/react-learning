import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const { counter, incrementCounter } = this.props
        return (
            <h1 onMouseOver={incrementCounter}>
                Hello World! {counter}
            </h1>
        )
    }
}

export default withCounter(HoverCounter)

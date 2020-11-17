import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        
        // this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            message: "hello"
        }
    }

    // clickHandler() {
    //     this.setState({
    //         message: "goodbye"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "goodbye"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click me!</button> */}
                {/* <button onClick = {() => this.clickHandler()}>Click me!</button> */}
                <button onClick = {this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default EventBind

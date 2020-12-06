import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {

        }
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text"></input>
                <button onClick={this.clickHandler}>See</button>
            </div>
        )
    }
}

export default RefsDemo

import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'Bye'
        }
    }

    handelUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handelCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handelTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handelSubmit = (event) => {
        alert(`${this.state.comments}, ${this.state.topic}, ${this.state.username}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <div>
                        <label>Username: </label>
                        <input type='text' value={username} onChange={this.handelUsernameChange}></input>
                    </div>
                    <div>
                        <label>Comments: </label>
                        <textarea value={comments} onChange={this.handelCommentsChange}></textarea>
                    </div>
                    <div>
                        <select value={topic} onChange={this.handelTopicChange}>
                            <option value='Hello'>Hello</option>
                            <option value='Bye'>Bye</option>
                            <option value='What'>What</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form

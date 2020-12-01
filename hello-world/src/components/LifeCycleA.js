import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Amin'
        }
        console.log('lifeCycle A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifeCycle A componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('lifeCycle A shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('lifeCycle A getSnapShotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifeCycle A componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Reza'
        })
    }

    render() {
        console.log('lifeCycle A Render')
        return (
            <div>
                <div>LifeCycleA</div>
                <LifeCycleB></LifeCycleB>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA

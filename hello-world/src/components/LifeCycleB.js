import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Amin'
        }
        console.log('lifeCycle B Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifeCycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifeCycle B componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('lifeCycle B shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('lifeCycle B getSnapShotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifeCycle B componentDidUpdate');
    }

    render() {
        console.log('lifeCycle B Render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB

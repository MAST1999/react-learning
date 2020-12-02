import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Amin'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Amin'
            })
        }, 2000);
    }

    render() {
        console.log('parent render');
        return (
            <div>
                Parent Comp
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

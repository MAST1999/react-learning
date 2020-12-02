import React, { Component } from 'react'
import MemoComp from './MemoComp';
// import PureComp from './PureComp';
// import RegComp from './RegComp';

class ParentComp extends Component {
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
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

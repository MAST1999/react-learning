import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('reg render');
        return (
            <div>
                RegComp {this.props.name}
            </div>
        )
    }
}

export default RegComp

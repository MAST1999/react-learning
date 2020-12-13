import React from 'react'

const withCounter = (WrappedComponent, increment = 1) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState(prevState => {
                return { counter: prevState.counter + increment }
            })
        }

        render() {
            return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter
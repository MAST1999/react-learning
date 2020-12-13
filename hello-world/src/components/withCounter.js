import React from 'react'

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        incrementCounter = () => {
            this.setState(prevState => {
                return { counter: prevState.counter + 1 }
            })
        }

        render() {
            return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} />
        }
    }
    return WithCounter
}

export default withCounter
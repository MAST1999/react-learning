import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Me!</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest!</div>
        //         </div>
        //     )
        // -----------------------------------------------
        // let message

        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Me!</div>
        // } else {
        //     message = <div>Welcome Guest!</div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
        // ------------------------------------------------
        // return (
        //     this.state.isLoggedIn ?
        //         (<div>Welcome Me!</div>
        //         ) : (
        //             <div>Welcome Guest!</div>)
        // )
        return (
            this.state.isLoggedIn && <div>Welcome Me!</div>
        )
    }
}


export default UserGreetings

import React from "react";

// const Greet = ({name, heroName}) => {
const Greet = (props) => {
    const {name, heroName} = props;
    return (
        <div>
            <h1>Hello {name} A.K.A {heroName} </h1>
        </div>
    )
}

export default Greet
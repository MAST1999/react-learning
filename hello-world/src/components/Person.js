import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>{`hello I am ${person.name} and I am ${person.age} years old and my skill is ${person.skill}`}</h2>
        </div>
    )
}

export default Person

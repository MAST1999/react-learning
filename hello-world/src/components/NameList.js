
import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['ali', 'amin', 'reza']
    const nameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 42,
            skill: 'Javascript'
        }
    ]
    const personList = persons.map(person => <Person person={person}></Person>)
    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}

export default NameList

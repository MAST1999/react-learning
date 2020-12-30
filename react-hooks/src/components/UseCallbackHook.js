import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function UseCallbackHook() {
    const [age, setAge] = useState(21)
    const [salary, setSalary] = useState(45000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={incrementAge}>increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={incrementSalary}>increment Age</Button>

        </div>
    )
}

export default UseCallbackHook

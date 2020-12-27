import React, { useState, useEffect } from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Clicked ${count} times!`
    })

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times!</button>
        </div>
    )
}

export default CounterOne

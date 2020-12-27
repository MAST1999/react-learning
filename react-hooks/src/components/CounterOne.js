import React, { useState, useEffect } from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('updating document title!');
        document.title = `Clicked ${count} times!`
    }, [count])

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={incrementCount}>Clicked {count} times!</button>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default CounterOne

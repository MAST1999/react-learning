import React from 'react'

function Count({ text, count }) {
    console.log(`Rendered : ${text} - ${count}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)

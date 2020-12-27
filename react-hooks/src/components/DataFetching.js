import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPosts] = useState({})
    const [idOfPost, setIdOfPost] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response => {
                console.log(response);
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [idFromButtonClick])

    const handelClick = () => {
        setIdFromButtonClick(idOfPost)
    }

    return (
        <div>
            <input type='number' value={idOfPost} onChange={e => setIdOfPost(e.target.value)} />
            <button type='button' onClick={handelClick}>Fetch Post</button>
            {
                <div>{post.title}</div>
            }
        </div>
    )
}

export default DataFetching

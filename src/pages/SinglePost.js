import React from 'react';
import {Link, useParams} from 'react-router-dom';

export const SinglePost = () => {
    const [post, setPost] = React.useState(null)
    const {id} = useParams()

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(res => setPost(res))
    }, [id])

    return (
        <>
            {post && <>
                <div>post's id: {id}</div>
                <div>{post.title}</div>
                <div>{post.body}</div>
                <Link to={`/posts/${id}/edit`}>Edit</Link>
            </>
            }
        </>
    )
        ;
};
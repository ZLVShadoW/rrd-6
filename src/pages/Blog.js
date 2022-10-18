import React from 'react';
import {Link} from 'react-router-dom';

export const Blog = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(res => setPosts(res))
    }, [])

    return (
        <div>
            {posts.map(el => (
                <div key={el.id}><Link to={`/posts/${el.id}`}>{el.id} : {el.title}</Link></div>
            ))}
        </div>
    );
};
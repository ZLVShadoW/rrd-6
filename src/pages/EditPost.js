import React from 'react';
import {useParams} from 'react-router-dom';

export const EditPost = () => {
    const {id} = useParams()

    return (
        <div>
            Edit page for post with id {id}
        </div>
    );
};
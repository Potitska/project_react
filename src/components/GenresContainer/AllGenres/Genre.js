import React from 'react';

const Genre = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );
}

export {Genre};
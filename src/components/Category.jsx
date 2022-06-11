import { useState } from 'react';

const Category = ({ name, id, currentId, setCurrentId, setLoadCount }) => {
    const categoryClickHandler = (id) => {
        setCurrentId(id)
        setLoadCount(10)
    };

    return (
        <div 
            className={'categories-item ' + (id === currentId ? "active" : "")}
            onClick={() => categoryClickHandler(id)}
        >
            { name }
        </div>
    )
}

export default Category
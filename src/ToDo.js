import React from 'react';

function ToDo({ id, task = "default", remove }) {
    const handleRemove = () => remove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default ToDo;
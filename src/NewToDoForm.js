import React, { useState } from 'react';
import uuid from 'react-uuid';

function NewToDoForm({ newToDo }) {
    const [formData, setFormData] = useState({
        task: ""
    });

    const getInput = e => {
        e.preventDefault();
        newToDo({ ...formData, id: uuid() });
        setFormData({ task: "" });
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }));
    };

    return (
        <div>
            <form onSubmit={getInput}>
                <div>
                    <label htmlFor='task'>What do you need to do?</label>
                    <input onChange={handleChange} type='text' name='task' id='task' value={formData.task} />
                </div>
                <button id='newToDoButton'>Add task</button>
            </form>
        </div>
    );
}

export default NewToDoForm;
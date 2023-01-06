import React, { useState } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const add = toDoObject => {
        setToDos(toDos => [...toDos, toDoObject]);
    };

    const remove = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    };

    const toDoDetails = toDos.map(toDo => (
        <ToDo
            key={toDo.id}
            id={toDo.id}
            task={toDo.task}
            remove={remove}
        />
    ));

    return (
        <div>
            <NewToDoForm newToDo={add} />
            <ul>{toDoDetails}</ul>
        </div>
    );
}

export default ToDoList;
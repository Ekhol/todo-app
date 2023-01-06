import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

it('renders without crashing', () => {
    render(<ToDoList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

function testTask(task = "testing") {
    const inputTask = screen.getByLabelText("task");
    const button = screen.getByText("Add task");

    fireEvent.change(inputTask, { target: { value: task } });
    fireEvent.click(button);
}

it('can add tasks without breaking', () => {
    const view = render(<ToDoList />);
    testTask(view);
});

it('can remove tasks', () => {
    const view = render(<ToDoList />);
    testTask(view);

    const deleteButton = screen.getByText("X");

    fireEvent.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
});
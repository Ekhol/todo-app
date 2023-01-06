import React from 'react';
import { render } from '@testing-library/react';
import NewToDoForm from './NewToDoForm';

it('renders without crashing', () => {
    render(<NewToDoForm />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<NewToDoForm />);
    expect(asFragment()).toMatchSnapshot();
});
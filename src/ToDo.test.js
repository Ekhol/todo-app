import React from 'react';
import { render } from '@testing-library/react';
import ToDo from './ToDo';

it('renders without crashing', () => {
    render(<ToDo />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<ToDo />);
    expect(asFragment()).toMatchSnapshot();
});
import React, { useState as useStateMock } from 'react';
import { render, screen } from '@testing-library/react';

import Homepage from './home-page.component';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn()
}));

describe('Homepage', () => {
    const setState = jest.fn();
    beforeEach(() => {
        useStateMock.mockImplementation((init) => [init, setState]);
    });

    test('should render img element and ul element', async () => {
        render(<Homepage />);

        const ulElement = screen.getByRole('list');
        const imgElement = screen.getByRole('img', { class: /img-fluid/i });

        expect(ulElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
    });

    test('should call a useState when movie name is clicked', () => {
        render(<Homepage />);

        expect(setState).toHaveBeenCalledTimes(1);
    });
});

// for development purpose
// screen.logTestingPlaygroundURL();

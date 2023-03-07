import { render, screen } from '@testing-library/react';

import App from './App';

test('should render sticky footer', () => {
    render(<App />);

    const footerElement = screen.getByText(/salvador\.flores\.dev/i);

    expect(footerElement).toBeInTheDocument();
});

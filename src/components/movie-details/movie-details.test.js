// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MovieDetails from './movie-details.component';

test('details should display img and details', () => {
    const selectedMovie = {
        title: 'Kung Fu Panda',
        director: 'John Stevenson and Mark Osborne',
        casts: 'Jack Black, Jackie Chan',
        genre: 'Action, Comedy',
        year: '2008',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
    };

    render(<MovieDetails movie={selectedMovie} />);

    // screen.logTestingPlaygroundURL();

    const imgElement = screen.getByRole('img', { name: /kung fu panda/i });
    const directorNamesText = screen.getByText(/john stevenson and mark osborne/i);
    const castsNamesText = screen.getByText(/john stevenson and mark osborne/i);

    expect(directorNamesText).toBeInTheDocument();
    expect(castsNamesText).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
});

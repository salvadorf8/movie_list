import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieList from './movie-list.component';

const renderComponent = async () => {
    const mock = jest.fn();

    const movies = [
        {
            title: 'Kung Fu Panda',
            director: 'John Stevenson and Mark Osborne',
            casts: 'Jack Black, Jackie Chan',
            genre: 'Action, Comedy',
            year: '2008',
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
        },
        {
            title: 'Kung Fu Panda 2',
            director: 'Jennifer Yuh Nelson',
            casts: 'Jack Black, Angelina Jolie, Dustin Hoffman',
            genre: 'Action, Comedy, Animation, Adventure',
            year: '2011',
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
        }
    ];

    const { container } = render(<MovieList movies={movies} selectMovie={mock} />);

    return { movies, container };
};

test('list should display movie names', async () => {
    renderComponent();

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Kung Fu Panda');
});

test('movie names in the list can be clicked', async () => {
    const mock = jest.fn();
    const user = userEvent.setup();

    const movies = [
        {
            title: 'Kung Fu Panda',
            director: 'John Stevenson and Mark Osborne',
            casts: 'Jack Black, Jackie Chan',
            genre: 'Action, Comedy',
            year: '2008',
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
        },
        {
            title: 'Kung Fu Panda 2',
            director: 'Jennifer Yuh Nelson',
            casts: 'Jack Black, Angelina Jolie, Dustin Hoffman',
            genre: 'Action, Comedy, Animation, Adventure',
            year: '2011',
            posterUrl: 'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
        }
    ];

    render(<MovieList movies={movies} selectMovie={mock} />);

    const items = screen.getAllByRole('listitem');

    await user.click(items[0]);

    expect(mock).toHaveBeenCalled();

    expect(mock).toHaveBeenCalledWith({
        title: 'Kung Fu Panda',
        director: 'John Stevenson and Mark Osborne',
        casts: 'Jack Black, Jackie Chan',
        genre: 'Action, Comedy',
        year: '2008',
        posterUrl: 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg'
    });
});

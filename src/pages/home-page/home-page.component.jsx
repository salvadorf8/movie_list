import { useEffect, useState } from 'react';

import MovieList from '../../components/movie-list/movie-list.component';
import MovieDetails from '../../components/movie-details/movie-details.component';
import MOVIE_DATA from '../../movie-data';

const Homepage = () => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        const fetchDataFromFile = () => {
            setMovies(MOVIE_DATA[0].movies);
        };

        fetchDataFromFile();
    });

    return (
        <div>
            <h1>HomePage</h1>
            <MovieList movies={movies} />
            <MovieDetails />
        </div>
    );
};

export default Homepage;

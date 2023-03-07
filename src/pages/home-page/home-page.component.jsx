import { useEffect, useState } from 'react';

import MovieList from '../../components/movie-list/movie-list.component';
import MovieDetails from '../../components/movie-details/movie-details.component';
import MOVIE_DATA from '../../movie-data';

const DEFAULT_MOVIE = {
    title: '',
    director: '',
    casts: '',
    genre: '',
    year: '',
    posterUrl: ''
};

const Homepage = () => {
    const [movies, setMovies] = useState();
    const [movieSelected, setMovieSelected] = useState(DEFAULT_MOVIE);

    const selectMovie = (movie) => {
        setMovieSelected(movie);
    };

    useEffect(() => {
        const fetchDataFromFile = () => {
            setMovies(MOVIE_DATA[0].movies);
        };

        fetchDataFromFile();
    });

    return (
        <div>
            <h1>HomePage</h1>
            <MovieList movies={movies} selectMovie={selectMovie} />
            <MovieDetails movie={movieSelected} />
        </div>
    );
};

export default Homepage;

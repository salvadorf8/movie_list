import { useState } from 'react';

import './movie-list.styles.css';

const MovieList = ({ movies, selectMovie }) => {
    const [selectedIndex, setSelectedIndex] = useState();

    const handleClick = (movie, index) => {
        selectMovie(movie);
        setSelectedIndex(index);
    };

    const renderMovies = movies?.map((movie, index) => {
        let customClassName = '';

        if (selectedIndex === index) {
            customClassName = 'highlight';
        }

        return (
            <li key={movie.title} className={customClassName} onClick={() => handleClick(movie, index)}>
                {movie.title}
            </li>
        );
    });

    return <ul className='col-md name-list'>{renderMovies}</ul>;
};

export default MovieList;

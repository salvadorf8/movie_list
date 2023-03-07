import { useState } from 'react';

import './movie-list.styles.css';

const MovieList = ({ movies }) => {
    const [selectedIndex, setSelectedIndex] = useState();

    const handleClick = (movie, index) => {
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

    return <ul>{renderMovies}</ul>;
};

export default MovieList;

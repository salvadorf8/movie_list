import './movie-list.styles.css';

const MovieList = ({ movies }) => {
    const renderMovies = movies?.map((movie, index) => {
        return <li key={movie.title}>{movie.title}</li>;
    });

    return <ul>{renderMovies}</ul>;
};

export default MovieList;

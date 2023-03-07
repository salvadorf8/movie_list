import './movie-details.styles.css';

const MovieDetails = ({ movie }) => {
    return (
        <div className='col-md text-center'>
            <img className='img-fluid' src={movie.posterUrl} alt={movie.title} />
            <div>
                <p>{movie.director}</p>
                <p>{movie.casts}</p>
                <p>{movie.genre}</p>
                <p>{movie.year}</p>
            </div>
        </div>
    );
};

export default MovieDetails;

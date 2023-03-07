const MovieDetails = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            {/* <img src={movie.posterUrl} alt={movie.title} /> */}
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

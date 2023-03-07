import MovieList from '../../components/movie-list/movie-list.component';
import MovieDetails from '../../components/movie-details/movie-details.component';

const Homepage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <MovieList />
            <MovieDetails />
        </div>
    );
};

export default Homepage;

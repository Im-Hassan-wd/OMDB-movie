const Movie = ({movie}) => {
    return (
        <div className="movie">
             <h2>{movie.Title}</h2>
             <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
}
 
export default Movie;
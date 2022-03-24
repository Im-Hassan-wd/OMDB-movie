import { useEffect, useState } from "react";
import Footer from "./Footer";
import Movie from "./Movie";
import Navbar from "./Navbar";

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() =>{
       fetchPopular()
        .then(data => {
            setMovies(data.Search);
            setIsPending(false);
            setError(false)
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
   }, []);
   
   const fetchPopular = async () => {
       const data = await fetch('http://www.omdbapi.com/?s=inception&apikey=474a7c0d');
       const movies = await data.json();
       console.log(movies)
       return movies;
   }

    return (
        <div className="home">
            <div className="popular">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                {movies && movies.map(movie => {
                    return <Movie key={movie.imdbID} movie={movie} />
                })}
            </div>
            { !isPending && <Footer />}
        </div>
    );
}
 
export default Home;
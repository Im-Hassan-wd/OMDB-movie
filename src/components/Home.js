import { useEffect, useState } from "react";
import Footer from "./Footer";
import Movie from "./Movie";

const Home = () => {
    const [popular, setPopular] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() =>{
       fetchPopular()
        .then(data => {
            setPopular(data.results);
            setFiltered(data.results);
            setIsPending(false);
            setError(false)
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
   }, []);
   
   const fetchPopular = async () => {
       const data = await fetch('http://www.omdbapi.com/?apikey=474a7c0d');
       const movies = await data.json();
       return movies;
   }

    return (
        <div className="home">
            <div className="popular">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                {/* {filtered && filtered.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })} */}
            </div>
            { !isPending && <Footer />}
        </div>
    );
}
 
export default Home;
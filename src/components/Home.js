import { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Movie from "./Movie";
import Navbar from "./Navbar";
import Search from "./Search";
import { useFetch } from '../hook/useFetch';

const movieTitles =  [
    'avengers',
    'inception',
]

const Home = () => {
    const {error, isPending, data: movies } = useFetch('http://www.omdbapi.com/?s=avengers&apikey=474a7c0d')

    return (
        <div className="home">
            <Banner />
            <div className="container">
                <Search />
                <div className="movie-container">
                    { isPending && <div>Loading...</div> }
                    { error && <div>{ error }</div> }
                    {movies && movies.map(movie => {
                        return <Movie key={movie.imdbID} movie={movie} />
                    })}
                </div>
                { !isPending && <Footer />}
                </div>
        </div>
    );
}
 
export default Home;
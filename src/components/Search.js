import { useFetch } from "../hook/useFetch";
import { useState } from "react";

import Movie from "./Movie";


const Search = () => {
    const [search, setSearch] = useState('')
    const [term, setTerm] = useState('avengers')
    const {error, isPending, data: movies } = useFetch(`http://www.omdbapi.com/?s=${term}&apikey=474a7c0d`)
    
    // console.log(search)
    const handleSearch = (e) => {
        e.preventDefault()
        setTerm(search)
    }


    return (
        <div>
            <form className="search" onSubmit={(e) => handleSearch(e)}>
                <label htmlFor="search">Search</label>
                <input type="text" name="search" placeholder="search any movie" onChange={(e) => {setSearch(e.target.value)}} value={search} />
            </form>

            <div className="movie-container">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                {movies && movies.map(movie => {
                    return <Movie key={movie.imdbID} movie={movie} />
                })}
            </div>
        </div>
    );
}
 
export default Search;
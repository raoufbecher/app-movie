import React from 'react';
import MovieCard from './MovieCard';
import {Link} from 'react-router-dom'


 const MovieList =({movies})=>{
     return(
         <div className="App-header">
             {movies.map((movie=> 
            <Link to ={`/description/${movie.id}`}>  <MovieCard key={movie.id} movie={movie}/> </Link>
             ))}
         </div>
     );
 }
 export default MovieList;
import MovieCard from './component/MovieCard'
import movies from './component/MoviesData'
import MovieList from './component/MovieList'
import AddMovie from './component/AddMovie'
import React, {useState} from 'react';
import './App.css';
function App() {
  const [movieList, setMovieList]=useState(movies);
  const getInputData = (data) => {
setMovieList ([...movieList,data] ); 
};
  
  return (
    <div className="App">
      <header >
        <AddMovie getInputData={getInputData} />
        <MovieList movies={movies}/>
      </header>
    </div>
  );
}

export default App;
import MovieCard from './component/MovieCard'
import movies from './component/MoviesData'
import MovieList from './component/MovieList'
import AddMovie from './component/AddMovie'
import React, {useState} from 'react';
import Filtre from './component/Filtre'
import './App.css';
function App() {
  const [movieList, setMovieList]=useState(movies);
  const [searchInput, setSearchInput] = useState({searchInput:'',searchRate:0})
  const getInputData = (data) => {
setMovieList ([...movieList,data] ); 
};
  const getSearchData = (searchData) => {
    setSearchInput(searchData)
  }
  
  return (
    <div className="App">
      <header >
        <Filtre getSearchData={getSearchData}/> <br/>
        <AddMovie getInputData={getInputData} />
        <MovieList movies={movieList.filter((movie)=>movie.title.toLowerCase().includes(searchInput.searchInput) && 
             movie.rate >=searchInput.searchRate
             )}/>
      </header>
    </div>
  );
}

export default App;
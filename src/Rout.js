import React from 'react'
import Description from './component/Description';
import {v4 as uuidv4 } from 'uuid'
import  {useState} from 'react';
import {Route} from 'react-router'
import App from './App'


const Rout = () => {
    const movies = [
        {
            id:uuidv4(),
            title:'John week',
            img:'https://images-na.ssl-images-amazon.com/images/I/51-v2kovwfL._SY445_.jpg',
            rate:2,
            desc:'Action ',
            trailer:'https://www.youtube.com/embed/2AUmvWm5ZDQ'
        },
        {
            id:uuidv4(),
            title:'the avengers',
            img:'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._AC_SY445_.jpg',
            rate:4,
            desc:'Science fiction',
            trailer:'https://www.youtube.com/embed/eOrNdBpGMv8"'
        },
        {
            id:uuidv4(),
            title:'One piece stampede',
            img:'https://images-na.ssl-images-amazon.com/images/I/914JErfhopL._SY445_.jpg',
            rate:5,
            desc:'Fantasy',
            trailer:'https://www.youtube.com/embed/S8_YwFLCh4U'
            
        },
        {
            id:uuidv4(),
            title:'The godfather',
            img:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            rate:4,
            desc:'Action, Drama',
            trailer : "https://www.youtube.com/embed/sY1S34973zA"
        },
        {
            id:uuidv4(),
            title:'Interstellar',
            img:'https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg',
            rate:5,
            desc:'Science fiction',
            trailer :"https://www.youtube.com/embed/watch?v=zSWdZVtXT7E"
        },
        
    ]
    const [movieList, setMovieList]=useState(movies);
    return (
        <div>
            <Route exact path ="/" render={(props)=>
            <App {...props} movieList={movieList} setMovieList={setMovieList}>

            </App>}>
            </Route>

            <Route exact path="/description/:id" render={(props)=>
            <Description  {...props} movieList={movieList}> 
            </Description>}>
            </Route>
        </div>
    )
}

export default Rout

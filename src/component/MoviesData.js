import {v4 as uuidv4 } from 'uuid'
const movies = [
    {
        id:uuidv4(),
        title:'John week',
        img:'https://images-na.ssl-images-amazon.com/images/I/51-v2kovwfL._SY445_.jpg',
        rate:2,
        desc:'Action'
    },
    {
        id:uuidv4(),
        title:'the avengers',
        img:'https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._AC_SY445_.jpg',
        rate:4,
        desc:'Science fiction',
    },
    {
        id:uuidv4(),
        title:'One piece stampede',
        img:'https://images-na.ssl-images-amazon.com/images/I/914JErfhopL._SY445_.jpg',
        rate:5,
        desc:'Fantasy',
    },
    {
        id:uuidv4(),
        title:'The godfather',
        img:'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        rate:4,
        desc:'Action, Drama',
    },
    {
        id:uuidv4(),
        title:'Interstellar',
        img:'https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg',
        rate:5,
        desc:'Science fiction',
    },
    
]
export default movies;
import React from 'react'
const Description = ({movieList,match,history}) => {

    const movies  = movieList.find(movie=> movie.id === match.params.id)
    return (
        <div className='trailer'>
            <h3 >Description</h3>
            <div>{movies.desc}</div> <br/> <br/> <br/> <br/> <br/> <br/>
            <iframe  width="560" height="315" src={movies.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br></br> <br></br>
        <button onClick= {()=>history.push('/')} >Back Home</button>
        </div>
    )
}

export default Description

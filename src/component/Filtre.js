import React,{useState,useEffect} from 'react'
import { TextField } from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';
const Filtre = ({getSearchData}) => {
    const [searchInput, setSearchInput] = useState({searchInput:''})
    const [searchRate, setSearchRate] = useState(0)
    const handleSearch = (e) => {
        setSearchInput({...searchInput,[e.target.name]:e.target.value})
        getSearchData({...searchInput,searchRate});
        console.log(searchRate)
    };
    useEffect(()=> 
    {getSearchData({...searchInput,searchRate});
},[searchInput,searchRate]);
    
    return (
        <div>
            <form>
                <TextField type='input' name='searchInput' onChange={handleSearch}/> <br/>
        <StarRatingComponent className='star-rating'
          name="rate" 
          starCount={5}
          value={searchRate}
          onStarClick={(value)=>setSearchRate(value)}
        /> 
            </form>
        </div>
    )
}

export default Filtre

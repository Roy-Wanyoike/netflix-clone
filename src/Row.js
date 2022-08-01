import React, { useEffect, useState } from 'react'
import axios from "./axios";
import request from './requests';
import row from './row.css'

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

useEffect(() => {
// if you reload its gonna run  a single movie once.
async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    console.log(request);
    return request;

}
fetchData();

}, [fetchUrl]);


return (
    <div>
        <h2>{title}</h2>
        {/* title */}
        <div className='row'>
        {/* container => posters */}
{movies.map (Movie => (
    <div className="row_poster">
    <image 
    key={movie.id}
    src={`$base_Url`}{movie.poster_path} alt='={movie.name}/>
    )}
    </div>
    </div>
)
}
export default Row
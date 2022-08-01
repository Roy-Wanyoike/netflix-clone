import { request } from 'http';
//this script is used to store the api key from the tdmbi
// you can check and generate yours
const API_KEY="772145e92dc3ed26b223123011e8f84f"; //this key is generated from tdmb for access to movies

const requests = {
    fetchTrending: `/trending/all/week?api_key={API_KEY}&language=en-US`;
    fetchNeflixOriginals: `/discover/tv?api_key={API_KEY}&with_networks=213`;
    fetchTrending: `/movie/top_rated?api_key={API_KEY}&language=en-US`;
    fetchTrending: `/trending/all/week?api_key={API_KEY}&language=en-US`;
    fetchTrending: `/trending/all/week?api_key={API_KEY}&language=en-US`;
    fetchTrending: `/discover/movie?api_key={API_KEY}&with_genre`;


}

export default request;

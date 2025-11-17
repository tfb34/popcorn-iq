import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
     useEffect(()=>{
        getMovieVideos();
    },[])

    const getMovieVideos = async ()=>{

        const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);

        const json = await response.json();
     
        const filterData = json.results.filter(movie => movie.type==="Trailer")
        const trailer = filterData.length ? filterData[0]: null
        dispatch(addTrailerVideo(trailer))
    }
}

export default useMovieTrailer;
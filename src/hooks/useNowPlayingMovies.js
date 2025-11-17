import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

  const useNowPlayingMovies = ()=>{
    // fetch data from tmdb app and update store
    const dispatch = useDispatch()

    

    useEffect(()=>{

        const getNowPlayingMovies = async ()=>{


            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);

            const json = await data.json();
            
            dispatch(addNowPlayingMovies(json.results))
        }
        
            getNowPlayingMovies()

    },[]);
  }


  export default useNowPlayingMovies;
  
  
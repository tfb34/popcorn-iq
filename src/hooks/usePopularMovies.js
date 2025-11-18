import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

  const usePopularMovies = ()=>{
    // fetch data from tmdb app and update store
    const dispatch = useDispatch()

    

    useEffect(()=>{

        const getPopularMovies = async ()=>{


            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

            const json = await data.json();
            
            dispatch(addPopularMovies(json.results))
        }
        
            getPopularMovies()

    },[]);
  }


  export default usePopularMovies;
  
  
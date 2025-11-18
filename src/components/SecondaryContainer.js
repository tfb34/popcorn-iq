import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const movies = useSelector(store => store.movies);

    return <div className="secondary-container absolute top-[68%] w-full bg-black z-10 pl-20" >
        <MovieList title={"NowPlaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
        </div>
}

export default SecondaryContainer;

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = ()=>{

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
                MainContainer
                    - videoBackground
                    -VideoTitle
                SecondaryContainer
                    -movielist * n
                        -card *n
            */}
        </div>
    )
}

export default Browse;
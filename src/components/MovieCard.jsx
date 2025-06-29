import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";

function MovieCard({movie}) {
    const { isFavorite, addToFavorite, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favorite){
            removeFromFavorites(movie.id)
            alert("Disliked this movie")
            console.log("Disliked this movie")
        }
         else { 
            addToFavorite(movie)
            alert("Liked this movie")
            console.log("Liked this movie")
            }
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
                   ♡ 
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate?.split("-")[0]}</p>
        </div>
    </div>
}


export default MovieCard;
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.thumbnail} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <span>⭐ {movie.rating}</span>
    </div>
  );
}

export default MovieCard;
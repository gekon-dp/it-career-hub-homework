import MovieCard from "../movieCard";

function MoviesDisplay({ moviesData }) {
  return (
    <ul className="MoviesDisplay">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </ul>
  );
}

export default MoviesDisplay;

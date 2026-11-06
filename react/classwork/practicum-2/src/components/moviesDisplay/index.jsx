import MovieCard from "../movieCard";

function MoviesDisplay({ moviesData }) {
  console.log(moviesData);
  return (
    <ul>
      {moviesData.map((movies) => {
        return <MovieCard key={movies.id} {...movies} />;
      })}
    </ul>
  );
}
export default MoviesDisplay;

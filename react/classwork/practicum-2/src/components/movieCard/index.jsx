function MovieCard({ title, year }) {
  return (
    <li>
      <h3>{title}</h3>
      <h4>Year: {year}</h4>
    </li>
  );
}
export default MovieCard;

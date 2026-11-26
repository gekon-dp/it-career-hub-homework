function MovieCard({ title, year }) {
  return (
    <li className="MovieCard">
      <span className="MovieCard__year">{year}</span>
      <h3>{title}</h3>
    </li>
  );
}

export default MovieCard;

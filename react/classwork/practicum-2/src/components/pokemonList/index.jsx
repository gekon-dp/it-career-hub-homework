import Pokemon from "../pokemon";

function PokemonList({ pokemonsData }) {
  return (
    <ul className="PokemonList">
      {pokemonsData.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </ul>
  );
}

export default PokemonList;

import Pokemon from "../pokemon";

function PokemonList({ pokemonsData }) {
  console.log(pokemonsData);
  return (
    <ul>
      {pokemonsData.map((pokemon) => {
        return <Pokemon key={pokemon.id} {...pokemon} />;
      })}
    </ul>
  );
}

export default PokemonList;

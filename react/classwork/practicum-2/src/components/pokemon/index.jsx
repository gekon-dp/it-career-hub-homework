const SPRITE_IDS = {
  Bulbasaur: 1,
  Charmander: 4,
  Squirtle: 7,
  Pikachu: 25,
  Jigglypuff: 39,
  Gengar: 94,
  Snorlax: 143,
  Mewtwo: 150,
  Dragonite: 149,
  Eevee: 133,
};

const TYPE_COLORS = {
  Grass: "#3d9a57",
  Poison: "#8b5cf6",
  Fire: "#ef5b2a",
  Water: "#2f80ed",
  Electric: "#b45309",
  Normal: "#8a8175",
  Fairy: "#e36aa8",
  Ghost: "#5b4b8a",
  Psychic: "#d946a6",
  Dragon: "#4f46e5",
  Flying: "#60a5fa",
};

function Pokemon({ id, name, type }) {
  const types = type.split("/");

  return (
    <li className="Pokemon">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${SPRITE_IDS[name]}.png`}
        alt={name}
      />
      <div>
        <h3>{name}</h3>
        <p>#{String(id).padStart(3, "0")}</p>
        <div className="Pokemon__types">
          {types.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: TYPE_COLORS[item] ?? "#64748b" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}

export default Pokemon;

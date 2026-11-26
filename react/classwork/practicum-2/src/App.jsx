import "./App.css";
import MoviesDisplay from "./components/moviesDisplay";
import PokemonList from "./components/pokemonList";
import TravelCard from "./components/travelCard";

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" },
  ];

  const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Matrix", year: "1999" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "Pulp Fiction", year: "1994" },
    { id: 5, title: "Forrest Gump", year: "1994" },
    {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
    },
    {
      id: 7,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
    },
    { id: 8, title: "The Dark Knight", year: "2008" },
    { id: 9, title: "Fight Club", year: "1999" },
    { id: 10, title: "The Godfather", year: "1972" },
  ];

  const cardsInfo = [
    {
      name: "Мальдивы",
      description:
        "Тропический рай идеален для любителей дайвинга и спокойного отдыха.",
      imageUrl:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      stats: {
        popularity: 9.5,
        accessibility: "Круглый год",
        climate: "Тропический",
        timeofday: "night",
      },
    },
    {
      name: "Исландия",
      description: "Страна вулканов, гейзеров и невероятных ландшафтов.",
      imageUrl:
        "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80",
      stats: {
        popularity: 8.0,
        accessibility: "Лучше летом",
        climate: "Субарктический",
        timeofday: "dawn",
      },
    },
    {
      name: "Япония",
      description:
        "Смесь древней культуры и современных технологий с удивительной природой.",
      imageUrl:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      stats: {
        popularity: 9.2,
        accessibility: "Круглый год",
        climate: "Умеренный",
        timeofday: "midday",
      },
    },
    {
      name: "Новая Зеландия",
      description: "Дом для приключений на природе, от треккинга до каякинга.",
      imageUrl:
        "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=80",
      stats: {
        popularity: 8.8,
        accessibility: "Круглый год",
        climate: "Умеренно-морской",
        timeofday: "dusk",
      },
    },
    {
      name: "Патагония (Аргентина)",
      description:
        "Рай для любителей треккинга и уединения на фоне монументальных гор.",
      imageUrl:
        "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=1200&q=80",
      stats: {
        popularity: 7.5,
        accessibility: "Лучше весной и осенью",
        climate: "Холодный",
        timeofday: "dusk",
      },
    },
  ];

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Practicum 2</p>
        <h1>Списки, пропсы и составные карточки</h1>
        <p>
          Покемоны и фильмы собраны из массивов. Карточка путешествия состоит из
          фото, описания и статистики.
        </p>
      </header>

      <main>
        <section className="section">
          <div className="section__head">
            <h2>Покемоны</h2>
            <span>{pokemons.length}</span>
          </div>
          <PokemonList pokemonsData={pokemons} />
        </section>

        <section className="section">
          <div className="section__head">
            <h2>Фильмы</h2>
            <span>{movies.length}</span>
          </div>
          <MoviesDisplay moviesData={movies} />
        </section>

        <section className="section">
          <div className="section__head">
            <h2>Направления</h2>
            <span>{cardsInfo.length}</span>
          </div>
          <div className="travelGrid">
            {cardsInfo.map((cardInfo) => (
              <TravelCard cardInfo={cardInfo} key={cardInfo.name} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

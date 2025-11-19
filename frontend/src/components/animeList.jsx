import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/animeList.css";

const categories = ["Action", "Romance", "Comedy", "Adventure", "Horror", "Drama", "Sci-Fi", "Fantasy"];

const types = ["tv", "movie", "ova", "special", "ona"];

const statuses = ["airing", "complete", "upcoming"];

export default function AnimeList() {
  const [animes, setAnimes] = useState([]);
  const [category, setCategory] = useState("Action");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");

  const fetchAnime = async () => {
    try {
      const query = search.trim() !== "" ? search : category;

      const params = new URLSearchParams({
        q: query,
        limit: 12,
      });

      if (type) params.append("type", type);
      if (status) params.append("status", status);

      const url = `https://api.jikan.moe/v4/anime?${params.toString()}`;

      const res = await axios.get(url);
      setAnimes(res.data.data);
    } catch (error) {
      console.error("❌ Error cargando animes", error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [category, search, type, status]);

  const cambiarCategoria = () => {
    const random = categories[Math.floor(Math.random() * categories.length)];
    setCategory(random);
    setSearch("");
  };

  return (
    <div className="anime-container">

      {/* --- Header --- */}
      <div className="anime-header">
        <h2>🎌 Animes ({search || category})</h2>

        <button onClick={cambiarCategoria}>
          Cambiar categoría aleatoria
        </button>
      </div>

      {/* --- Filtros --- */}
      <div className="filters">

        {/* Buscar por nombre */}
        <input
          type="text"
          placeholder="Buscar anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Select de categoría */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Tipo */}
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Tipo (todos)</option>
          {types.map((t) => (
            <option key={t} value={t}>{t.toUpperCase()}</option>
          ))}
        </select>

        {/* Estado */}
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Estado (todos)</option>
          <option value="airing">Airing</option>
          <option value="complete">Finished</option>
          <option value="upcoming">Upcoming</option>
        </select>

      </div>

      {/* --- Grid --- */}
      <div className="anime-grid">
        {animes.length === 0 ? (
          <p>No se encontraron resultados 😞</p>
        ) : (
          animes.map((anime) => (
            <div key={anime.mal_id} className="anime-card">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="anime-image"
              />
              <h3>{anime.title}</h3>
              <p>{anime.type} • {anime.episodes || "?"} eps</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

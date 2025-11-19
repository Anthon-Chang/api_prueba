import AnimeList from "../components/animeList";
import "../styles/servicios.css";

export default function Servicios() {
  return (
    <main className="servicios-page">
      <h1>Servicios</h1>

      <p>Estos son nuestros servicios disponibles:</p>

      {/* Aquí estamos llamando a tu componente */}
      <AnimeList />
    </main>
  );
}

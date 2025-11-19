import { useEffect, useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import "../styles/home.css";

export default function Home() {
  const [planes, setPlanes] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  // Obtener los planos del backend (memoizado para evitar warning de dependencias)
  const fetchPlanes = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/plans`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setPlanes(data);
    } catch (error) {
      console.error("Error al cargar planos:", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchPlanes();
  }, [fetchPlanes]);

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <h1>Explora Nuestros Planos de Interiores</h1>
          <p className="lead">
            Visualiza diseños reales creados con modelado 3D y arquitectura digital.
          </p>
              <a className="btn2" href="#planes">Ver Planos</a>
        </div>
        <div className="hero-image" aria-hidden="true"></div>
      </section>
{/* PLANOS (api privada) */}
<section id="planes" className="services container">
  <h2>Planos Disponibles</h2>

  {/* PAGINACIÓN */}
  <div className="pagination-controls">
    <button 
      className="btn-small" 
      onClick={() => setPage(page > 1 ? page - 1 : 1)}
      disabled={page === 1}
    >
      ◀ Retroceder
    </button>

    <span className="page-number">Página {page}</span>

    <button 
      className="btn-small" 
      onClick={() => setPage(page + 1)}
      disabled={page * ITEMS_PER_PAGE >= planes.length}
    >
      Avanzar ▶
    </button>
  </div>

  <div className="cards">
    {planes.length === 0 ? (
      <p>Cargando planos...</p>
    ) : (
      planes
        .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
        .map((plano) => (
          <article className="card" key={plano._id}>
              <div className="card-img">
                <img src={plano.image_url} alt={plano.name} />
              </div>

              <div className="card-body">
                <div>
                  <h3>{plano.name}</h3>
                  <p className="desc">{plano.description}</p>
                </div>

                <div>
                    <div className="card-meta">
                      <span><strong>Área:</strong> {plano.area_m2} m²</span>
                      <span><strong>Estilo:</strong> {plano.style}</span>
                    </div>

                    <div className="card-actions">
                      <Button as="link" to={`/plans/${plano._id}`} variant="ghost">Ver Detalles</Button>
                    </div>
                </div>
              </div>
          </article>
        ))
    )}
  </div>
</section>

      {/* RESTO DEL FRONT (sin cambios) */}
      <section className="about container">
        <h2>Sobre Nosotros</h2>
        <div className="about-grid">
          <div>
            <p>
              Roble es un espacio donde la arquitectura digital y los modelos 3D
              se encuentran con el diseño de interiores para crear soluciones sorprendentes.
            </p>
            <a className="btn" href="#">Conoce Más</a>
          </div>
          <div className="about-image" aria-hidden="true"></div>
        </div>
      </section>

      <section className="contact container">
        <h2>Contacto</h2>
        <div className="contact-grid">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Gracias — mensaje enviado (simulado).");
              e.target.reset();
            }}
          >
            <label>First name *<input type="text" name="first" required /></label>
            <label>Last name *<input type="text" name="last" required /></label>
            <label>Email *<input type="email" name="email" required /></label>
            <label>Write a message<textarea name="message"></textarea></label>
            <button className="btn" type="submit">Submit</button>
          </form>
          <div className="contact-info">
            <p>info@roble.com</p>
            <p>Av. Calvo 202, Cuenca, EC</p>
          </div>
        </div>
      </section>
    </main>
  );
}


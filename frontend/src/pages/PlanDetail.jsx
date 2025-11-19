import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlan } from '../services/planService';
import '../styles/home.css';

export default function PlanDetail(){
  const { id } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function load(){
      try{
        const data = await getPlan(id);
        setPlan(data);
      }catch(err){
        console.error(err);
      }finally{
        setLoading(false);
      }
    }
    load();
  },[id]);

  if(loading) return <main className="container"><p>Cargando detalle...</p></main>;
  if(!plan) return <main className="container"><p>No se encontró el plano.</p></main>;

  return (
    <main className="container">
      <section className="hero" style={{paddingTop:20}}>
        <div className="hero-inner">
          <h1>{plan.name}</h1>
          <p className="lead">{plan.description}</p>
          <div style={{marginTop:12}}>
            <Link to="/" className="btn secondary">Volver</Link>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true" style={{backgroundImage:`url(${plan.image_url})`,minHeight:260}}></div>
      </section>

      <section style={{padding:'18px 0'}}>
        <div className="card">
          <div className="card-body">
            <h3>Detalles</h3>
            <div className="card-meta">
              <p><strong>Área:</strong> {plan.area_m2} m²</p>
              <p><strong>Estilo:</strong> {plan.style}</p>
              {plan.rooms && <p><strong>Habitaciones:</strong> {plan.rooms}</p>}
            </div>
            {plan.extra && <p>{plan.extra}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

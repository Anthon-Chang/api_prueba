import { useEffect, useState } from "react";
import { getPlans } from "../services/planService";
import Button from './Button';

function PlanList() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    async function cargarPlanes() {
      try {
        const data = await getPlans();
        setPlanes(data);
      } catch (error) {
        console.error(error);
      }
    }

    cargarPlanes();
  }, []);

  return (
    <div className="cards">
      {planes.map((plan) => (
        <article key={plan._id} className="card">
          <div className="card-img">
            <img src={plan.image_url} alt={plan.name} />
          </div>

          <div className="card-body">
            <div>
              <h2 className="card-title">{plan.name}</h2>
              <p className="desc">{plan.description}</p>
            </div>

            <div>
              <div className="card-meta">
                <span>Habitaciones: {plan.rooms}</span>
                <span>Área: {plan.area_m2} m²</span>
              </div>

              <div className="card-actions">
                <Button as="link" to={`/plans/${plan._id}`} variant="ghost">Ver Detalles</Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlanList;

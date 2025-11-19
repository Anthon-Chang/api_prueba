import { useEffect, useState } from "react";
import "./../ninjas.css";

import apiClient from "../services/apiClient";

const NinjaList = () => {
  const [ninjas, setNinjas] = useState([]);

  const fetchNinjas = async () => {
    const res = await apiClient.get(`/ninjas`);
    setNinjas(res.data);
  };

  const eliminarNinja = async (id) => {
    await apiClient.delete(`/ninjas/${id}`);
    fetchNinjas();
  };

  useEffect(() => {
    fetchNinjas();
  }, []);

  return (
    <div className="ninja-list">
      <h2> Ninjas Registrados</h2>
      {ninjas.map((ninja) => (
        <div key={ninja.id} className="ninja-item">
          <span>
            {ninja.nombre} - {ninja.rango} ({ninja.aldea})
          </span>
          <button onClick={() => eliminarNinja(ninja.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default NinjaList;


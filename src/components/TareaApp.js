import { useState } from "react";
import "../styles/Tarea.css";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";

const TareaApp = () => {

  const [tareas, setTareas] = useState(["Tarea 1", "Tarea 2", "Tarea 3"]); 

  const agregarPendiente= ( pendiente)=>{
    
    const pendientes = [...tareas, pendiente];
    setTareas(pendientes);
  }

  return (
    <div className="container text-center contenedor-tarea">
      <h1>MIS TAREAS</h1>
      <hr />
      <TareaForm agregarPendiente={agregarPendiente} />
      <hr />
      <h3>Listado de tareas</h3>
      <div className="listado-tarea">
        {
            tareas.map((tarea, index) => <Tarea key={index} descripcion={tarea} />)
        }
      </div>
    </div>
  );
};

export default TareaApp;

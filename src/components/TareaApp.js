import { useState } from "react";
import "../styles/Tarea.css";
import Tarea from "./Tarea";
import TareaForm from "./TareaForm";

const TareaApp = () => {

  const [tareas, setTareas] = useState([]); 

  const agregarPendiente= ( pendiente)=>{
    
    const pendientes = [...tareas, pendiente];
    setTareas(pendientes);
  }

  const eliminarTarea = (pendiente)=>{
    const pendientes = tareas.filter(x=> x !== pendiente);
    setTareas(pendientes);
  }

  return (
    <div className="contenedor-tarea">
      <h1>Mis Tareas</h1>
      <hr />
      <TareaForm agregarPendiente={agregarPendiente} />
      <hr />
      <h3>Listado de tareas</h3>
      <div className="listado-tarea">
        {
            tareas.map((tarea, index) => 
                <Tarea key={index} 
                    descripcion={tarea} 
                    eliminarTarea={eliminarTarea} 
                />
                )
        }
      </div>
    </div>
  );
};

export default TareaApp;

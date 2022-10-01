import { useState } from "react";

function TareaForm({ agregarPendiente }) {

 const [pendiente, setPendiente] = useState("");

  const agregarTarea = () => {
    agregarPendiente(pendiente);
    setPendiente("");
  };

  const onChangePendiente = ({ target }) =>{
    setPendiente(target.value);
  }

  return (
    <div className="formulario-tarea">
      <div style={{ margin: "10px" }}>
        <input className="form-control" type="text" name="descripcion" 
        onChange={onChangePendiente} value={pendiente} />
      </div>
      <div style={{ margin: "10px" }}>
        <input
          className="btn btn-primary"
          type="button"
          value="Add"
          onClick={agregarTarea}
        />
      </div>
    </div>
  );
}

export default TareaForm;

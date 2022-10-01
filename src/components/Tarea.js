function Tarea({ descripcion, eliminarTarea}){
    return (
        <div className="tarea-item">
            <label>{descripcion}</label>
            <i className="bi bi-trash" onClick={()=> eliminarTarea(descripcion)} ></i>
        </div>
    );
}

export default Tarea;
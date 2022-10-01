function Tarea(props){
    return (
        <div className="tarea-item">
            <label>{props.descripcion}</label>
            <i className="bi bi-trash"></i>
        </div>
    );
}

export default Tarea;
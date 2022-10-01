import { useState } from "react";

function App(){

  const [contador, setContador] = useState(10);

  const aumentar = ()=>
  {
    setContador(contador+1);
  }

  const disminuir  = ()=>
  {
    setContador(contador-1);
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <h3>La cuenta es: { contador }</h3>
      <input 
      type="button" 
      value="+" 
      className="btn btn-primary"
      onClick={aumentar}
      />
      <input 
      type="button" 
      value="-" 
      className="btn btn-primary"
      onClick={disminuir}
      />
      <input 
      type="button" 
      value="Reset" 
      className="btn btn-primary"
      onClick={()=> setContador(0)}
      />

    </div>
  )
}

export default App;
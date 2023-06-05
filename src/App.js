import "./App.css";
import Testimonio from "./components/Testimonio";
import testimonios from './components/lista-testimonios.js';
function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
       {
       testimonios.map((testimonio)=>(<Testimonio 
        imagen={testimonio.imagen}
        nombre={testimonio.nombre} pais={testimonio.pais} cargo={testimonio.cargo} empresa={testimonio.empresa}
        testimonio={testimonio.testimonio}
        />))
}
        
      </div>
    </div>
  );
}

export default App;

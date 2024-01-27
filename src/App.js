import './App.css';
import NAVS from './nav/NAVS';
import Recursos from './recursos/Segundo.jsx';
import Proyectos from './proyect/Proyectos.jsx';
import Estudio from './estudios/Estudio.jsx';
import Contacto from './contacto/Contacto.jsx';

function App() {
  return (
    <div className="App">
        <NAVS/>
        <Recursos/>
        <Proyectos/>
        <Estudio/>
        <Contacto/>
    </div>
  );
}

export default App;

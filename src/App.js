import React from 'react';
import Producto from './components/class_component/Producto';
import Vendedor from './components/func_component/vendedor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App container-fluid" id = "contenedor_padre">
        <Producto/>
        <Vendedor/>
    </div>
  );
}

export default App;

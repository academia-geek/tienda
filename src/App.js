import React from 'react';
import Producto from './components/producto';
import Vendedor from './components/vendedor';
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

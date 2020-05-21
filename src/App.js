import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Producto from './components/class_component/Producto';
import Vendedor from './components/func_component/vendedor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App container-fluid" id = "contenedor_padre">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <Link to = "/producto">Producto</Link>
                </li>
                <li className="nav-item">
                  <Link to = "/vendedor">Vendedor</Link>
                </li>
            </ul>
          </div>
      </nav>
        <Route exact path="/" component={Producto}/>
        <Route exact path="/producto" component={Producto}/>
        <Route exact path="/vendedor" component={Vendedor}/>
      </Router>
    </div>
  );
}

export default App;

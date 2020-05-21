import React, {Component} from 'react';
import proptype from 'prop-types';

class Producto extends Component{
	constructor(){
        super();
        this.state = {
            codigo : "A000", 
            precio : 100
        }
        this.contador = 0;
    }
    
    handleCambioCodigo = (e) => {
        this.contador++;
        this.setState({codigo: `A00${this.contador}`, precio : (this.state.precio + this.contador)});
        
    }
    
    render(){
        const {referencia} = this.props;
        const {codigo,precio} = this.state;
        console.log("============")
        console.log(this.state);
        console.log("============")
        return(
            <section className = "card bg-success">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <div className = "row">
                    <div className = "col-lg-6 col-6">Referencia:{referencia}</div>
                    <div className = "col-lg-6 col-6">Código: {codigo}</div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Precio: {precio}</div>
                    <div className = "col-lg-6 col-6">Importado: </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-12 col-12">
                        <button onClick = {this.handleCambioCodigo} className = "btn btn-warning">Cambiar Código</button>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

Producto.defaultProps = {
    referencia : "76A"
}

Producto.propTypes = {
    referencia : proptype.string.isRequired
}

export default Producto;
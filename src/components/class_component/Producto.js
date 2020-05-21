import React, {Component} from 'react';
import proptype from 'prop-types';

class Producto extends Component{
	constructor(){
        super();
        this.state = {
            codigo : "0000"
        }
    }
    
    handleCambioCodigo(e){
        console.log("Se realizo el cambio");
    }
    
    render(){
        const {referencia} = this.props;
        console.log(this);
        return(
            <section className = "card bg-success">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <div className = "row">
                    <div className = "col-lg-6 col-6">Referencia:{referencia}</div>
                    <div className = "col-lg-6 col-6">Código: {this.state.codigo}</div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Precio: </div>
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
import React, {Component} from 'react';
import proptype from 'prop-types';

class Producto extends Component{
    render(){
        const {referencia} = this.props;
        return(
            <section className = "card bg-success">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <div className = "row">
                    <div className = "col-lg-6 col-6">Referencia:{referencia}</div>
                    <div className = "col-lg-6 col-6">Código:</div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Precio: </div>
                    <div className = "col-lg-6 col-6">Importado: </div>
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
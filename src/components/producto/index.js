import React from 'react';
import PropTypes from 'prop-types';

let componenteProducto = ({referencia, importado, codigo}) => {
    return (
        <section className = "card bg-success">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <div className = "row">
                    <div className = "col-lg-6 col-6">Referencia: {referencia}</div>
                    <div className = "col-lg-6 col-6">Código: {codigo}</div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Precio: </div>
                    <div className = "col-lg-6 col-6">Importado: </div>
                </div>
            </div>
        </section>
    );
}

componenteProducto.defaultProps = {
    referencia : "AAA", 
    codigo : "0000", 
    precio : 0
}

componenteProducto.propTypes = {
    referencia : PropTypes.string.isRequired, 
    codigo : PropTypes.string.isRequired, 
    precio : PropTypes.number.isRequired, 
    importado : PropTypes.bool
};

export default componenteProducto;
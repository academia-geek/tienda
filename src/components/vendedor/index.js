import React from 'react';
import pr from 'prop-types'

let componenteVendedor = ({nombre,apellido,edad,documento,lugar_residencia}) => {
	try{
    return (
        <section className = "card bg-info">
            <div className="card-header">
                Vendedor
            </div>
            <div className="card-body">
            <div className = "row">
                    <div className = "col-lg-6 col-6">Nombre: {nombre}</div>
                    <div className = "col-lg-6 col-6">Apellido: {apellido}</div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Edad: </div>
                    <div className = "col-lg-6 col-6">Documento: </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Lugar de residencia: </div>
                </div>
            </div>
        </section>
    );
    }catch(error){
      console.log(error)  ;
    }
}

/*componenteVendedor.defaultProps = {
    nombre : "Diego"
}; */

componenteVendedor.propTypes = {
    nombre : pr.string.isRequired
};

export default componenteVendedor;
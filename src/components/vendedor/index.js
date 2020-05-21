import React from 'react';

let componenteVendedor = () => {
    return (
        <section className = "card bg-info">
            <div className="card-header">
                Vendedor
            </div>
            <div className="card-body">
            <div className = "row">
                    <div className = "col-lg-6 col-6">Nombre: </div>
                    <div className = "col-lg-6 col-6">Apellido: </div>
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
}

export default componenteVendedor;
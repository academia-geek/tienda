import React from 'react';

let componenteProducto = () => {
    return (
        <section className = "card bg-success">
            <div className="card-header">
                Producto
            </div>
            <div className="card-body">
                <div className = "row">
                    <div className = "col-lg-6 col-6">Referencia: </div>
                    <div className = "col-lg-6 col-6">Código: </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">Precio: </div>
                    <div className = "col-lg-6 col-6">Importado: </div>
                </div>
            </div>
        </section>
    );
}

export default componenteProducto;
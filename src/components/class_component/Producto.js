import React, {Component} from 'react';
import proptype from 'prop-types';

class Producto extends Component{
	constructor(){
        super();
        this.imgRutas  = [
            "https://pbs.twimg.com/profile_images/1080594463901302786/RNz9UfNE_400x400.jpg", 
            "https://pbs.twimg.com/profile_images/1090461004792774657/a8S_zZum_400x400.jpg", 
            "https://pbs.twimg.com/profile_images/1198039283073998848/ZYAODVwz.jpg", 
            "https://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/3850.png"
        ];
        
        this.state = {
            codigo : "A000", 
            precio : 100, 
            parimpar : "", 
            imagenEquipoAnt : "https://i.pinimg.com/originals/e2/29/0a/e2290a9c1b88818cab6ed0a304a82b5f.jpg"
        }
        this.contador = 0;
    }
    
    handleCambioCodigo = (e) => {
        this.contador++;
        this.setState({codigo: `A00${this.contador}`, precio : (this.state.precio + this.contador)});
        
    }
    
    handleCambioParImpar = (e) => {
        console.log();
        if(e.target.value % 2 === 0){
            this.setState({parimpar: `${e.target.value} es par.`});
        }else{
            this.setState({parimpar: `${e.target.value} es impar.`})
        }
    }
    
    handleCambioEscudoEquipo = (e) => {
        const max = 3;
        const min = 0;
        let p = Math.round(Math.random() * (max - min) + min);
        console.log(p);
        this.setState({imagenEquipoAnt:this.imgRutas[p]});
    }
    
    render(){
        const {referencia} = this.props;
        const {codigo,precio, parimpar} = this.state;
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
                    <div className = "col-lg-6 col-6">
                        <button onClick = {this.handleCambioCodigo} className = "btn btn-warning">Cambiar Código</button>
                    </div>
                    <div className = "col-lg-6 col-6">
                        <div className = "row">
                            <div className = "col-lg-7 col-7">
                                <input className = "form-control" type = "number" id = "parimpar" onChange = {this.handleCambioParImpar} />
                            </div>
                            <div className = "col-lg-5 col-5">
                                {parimpar}
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-12 col-12 text-center">
                        <button className = "btn btn-primary" onClick={this.handleCambioEscudoEquipo}>Cambiar Escudo</button>
                    </div>
                    <div className = "col-lg-12 col-12 text-center">
                        <img src = {this.state.imagenEquipoAnt} width = "400"/>
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
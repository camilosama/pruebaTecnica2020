import React from 'react'
import {Link,withRouter} from 'react-router-dom'


const Eventos = (props) =>  {

    //const [usuario, setUsuario] = React.useState('')
    //setUsuario(localStorage.getItem("user"))
    //setUsuario(JSON.parse(localStorage.getItem("user")))
    //console.log(usuario)

    function evento(){props.history.push('/evento/:id')}

    return (
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src="https://www.itau.co/sites/default/files/distritonaranja/dist/images/artists/artist-img.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Marcial Alegría </h5>
                        <p className="card-text">A un costado de la Ciénaga Grande en Lorica en el municipio de San Sebastián Córdoba, Marcial Alegría, después de ver una película mexicana, decidió ser pintor. Sus pinturas reúnen su necesidad incansable de pintar los paisajes, la cultura y la tradición de su pueblo con formas simples y escenas del día a día que que con sus colores y sus fandangos nos hacen sentir la calidez.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Evento/1'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://static.eticket.co/imagenes/imgEventos/200130090129128_estelar_EstelarV2.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">DEJATE CONSENTIR </h5>
                        <p className="card-text">Evento sujeto a cargo x servicio por el sistema eticket (IVA INCLUIDO) , los cuales están incluidos en el precio listado. .</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Evento/2'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            
            <div className="card">
                <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101748720%2F448733007984%2F1%2Foriginal.20200524-222415?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=da9328f0ffddaa84d40aa5ccb8b5d69c" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Build a startup community in your city. </h5>
                        <p className="card-text">Would you like to start a startup community but have no resources of your own? Waxdale Pitch Studios is looking for Ecosystem Leaders to operate startup communities in exchange for equity.</p>
                    </div>
                    <div className="card-footer">
                    <span className="text-center"><small className="text-muted"><Link to={'/Evento/3'}> consultar </Link></small></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Eventos)
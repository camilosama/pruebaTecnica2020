import React from 'react'
import {Link,withRouter} from 'react-router-dom'


const Noticias = (props) =>  {

    //const [usuario, setUsuario] = React.useState('')
    //setUsuario(localStorage.getItem("user"))
    //setUsuario(JSON.parse(localStorage.getItem("user")))
    //console.log(usuario)

    function noticias(){props.history.push('/noticias/:id')}

    return (
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1arRIg.img?h=1080&w=1920&m=6&q=60&o=f&l=f&x=579&y=430" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Los porqués de la Procuraduría para pedir que le reduzcan la pena a Andrés Felipe Arias </h5>
                        <p className="card-text">El Ministerio Público le pidió a la Corte Suprema confirmar el fallo condenatorio contra el exministro de Agricultura, pero sugirió revisar la alta pena que le impusieron ya que la razón que hubo detrás de ese incremento podría vulnerar sus derechos.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Noticias/1'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1arHt2.img?h=1080&w=1920&m=6&q=60&o=f&l=f" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Estafas en Internet: Circula en WhatsApp falso enlace de Ingreso Solidario </h5>
                        <p className="card-text">A través de redes sociales circula una nueva modalidad de estafa que simula ser un formulario oficial del beneficio del gobierno Ingreso Solidario. El mensaje que se viralizó tiene un enlace que dirige a los usuarios a una página web que tiene errores claros de diseño y redacción.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Noticias/2'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            
            <div className="card">
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB19bN8O.img?h=1080&w=1920&m=6&q=60&o=f&l=f" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Instagram extiende la duración de los videos en directo </h5>
                        <p className="card-text">La red social Instagram introdujo una serie de novedades en los videos en directo de Instagram Live y ha extendido su duración máxima, que pasa de una a cuatro horas, y añadió también un archivo de directos para almacenarlos por un tiempo limitado..</p>
                    </div>
                    <div className="card-footer">
                    <span className="text-center"><small className="text-muted"><Link to={'/Noticias/3'}> consultar </Link></small></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Noticias)
import React from 'react'
import {withRouter} from 'react-router-dom'

const Menu = (props) =>  {

    //const [usuario, setUsuario] = React.useState('')
    //setUsuario(localStorage.getItem("user"))
    //setUsuario(JSON.parse(localStorage.getItem("user")))
    //console.log(usuario)
    const [usuarioLogin, setUsuarioLogin] = React.useState(true)
    function noticias(){props.history.push('/noticias')}
    function videos(){props.history.push('/videos')}
    function eventos(){props.history.push('/eventos')}

    return (
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src="https://pm1.narvii.com/6245/ea67668a8c5b346361a441a37339889911e7a562_hq.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Noticias de interés</h5>
                        <p className="card-text">Todas las últimas noticias de las ciudades de Colombia. Encuentre las principales noticias acerca de Cali, Medellin, Bogotá en Colombia.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><button className="btn btn-info btn-block" onClick={noticias}>consultar</button></small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://static.wixstatic.com/media/7ba241_09ebdbb189fa4f95a958e6fef2099ff7~mv2.png/v1/fit/w_560,h_315,al_c,q_80/file.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Eventos</h5>
                        <p className="card-text">Eventos. Taller gratuito de dramaturgia y actuación. Septiembre 14 Diciembre 09. Escuelas de Formación con la Fundación Vientos del Sol - FIVASUA. Octubre </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><button className="btn btn-info btn-block" onClick={eventos}> consultar </button></small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            
            <div className="card">
                <img src="https://i.ytimg.com/vi/datHO_TETuE/maxresdefault.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Vídeos informativos</h5>
                        <p className="card-text">Videos Informativos. Los vídeos informativos son el tipo de vídeo más consumido alrededor de todo el mundo. La información nos rodea, están sucediendo.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><button className="btn btn-info btn-block" onClick={videos}> consultar </button></small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Menu)
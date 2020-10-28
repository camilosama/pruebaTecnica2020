import React from 'react'
import { useParams } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Evento = (props)  => {

    const {id} = useParams() 
    console.log(id)

    const startTime = new Date();
    
    function regresar(){
        var endTime = new Date();
        let timeDiff = endTime - startTime;
        timeDiff /= 1000;

        var hitorial = JSON.stringify({ pagina : `Evento: ${id}`, segundos : Math.round(timeDiff), }),
            Historiales = localStorage.getItem('historial');
            Historiales = Historiales ? JSON.parse(Historiales) : [];
        Historiales.push(hitorial);
        localStorage.setItem("historial", JSON.stringify(Historiales)); 
        props.history.push('/Eventos')
    }

    return (
        <div>
        {(function() {
            switch (id) {
              case '1':
                return (
                        <div className="card mb-3">
                        <button type="button" className="btn btn-dark btn-block" onClick={regresar}>Regresar</button>
                        <div className="row mt-3">
                                <div className="col-2"></div>
                                <div className="col-8"><img src="https://www.itau.co/sites/default/files/distritonaranja/dist/images/artists/artist-img.jpg" className="card-img-top" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Marcial Alegría</h5>
                            <p className="card-text"> A un costado de la Ciénaga Grande en Lorica en el municipio de San Sebastián Córdoba, Marcial Alegría, después de ver una película mexicana, decidió ser pintor. Sus pinturas reúnen su necesidad incansable de pintar los paisajes, la cultura y la tradición de su pueblo con formas simples y escenas del día a día que que con sus colores y sus fandangos nos hacen sentir la calidez, la alegría y la nostalgia incrustada en nuestra memoria de los pueblos de la costa Caribe y de rivera del río Magdalena.<br/>
                            Aunque a lo largo de su vida, la obra de Marcial ha sido referenciada por curadores, investigadores y periodistas, hoy a sus 84 esté artistas Zenú, es un reflejo de la historia de muchos otros, que contra todas las adversidades han dedicado su vida al arte y que aunque sus obras hayan sido expuestas hasta en Roma, sigue viviendo en una humilde casita forrada de piso a techo con sus trabajos, a la espera de compradores que pasen por su pueblo y vean esta joya del arte nacional. </p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                )
                break
                case '2':
                    return (
                            <div className="card mb-3">
                            <button type="button" className="btn btn-dark btn-block" onClick={regresar}>Regresar</button>
                            <div className="row mt-3">
                                <div className="col-2"></div>
                                <div className="col-8"><img src="https://static.eticket.co/imagenes/imgEventos/200130090129128_estelar_EstelarV2.jpg" className="card-img-top" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title"> DEJATE CONSENTIR </h5>
                                <p className="card-text">Un nuevo año arranca con buenas noticias el próximo 14 de marzo de 2020 en la locación Hacienda San Rafael en Bogotá, tendrá lugar un evento muy especial preparado solo para las mujeres.<br/> 
                                    Déjate Consentir es un espacio de experiencias pensadas solo para mujeres, allí podrán encontrar muchas actividades, talleres y conferencias las cuales les permitirán dedicarse un día solo para ellas. <br/>
                                    Más de 9 conferencistas de primer nivel, stands llenos de experiencias de grandes marcas las cuales tendrán muchas actividades gratuitas, actividades Fitness al aire libre, zona de comidas y una confortable bar zone para un rato entre amigas son solo algunas de las actividades que podrán disfrutar.<br/>
                                    Un espacio creado para que puedan tener un día entre amigas, consentirse, atreverse, encontrarse, divertirse y muchos más.<br/> 
                                    Dentro de las novedades encontraremos zonas de descanso, vestiers y guardaropa para despreocuparse y cada asistente podrá llevarse una bolsa llena de regalos de las marcas. </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    )
                    break
              case '3':
                return (
                    <div className="card mb-3">
                    <button type="button" className="btn btn-dark btn-block" onClick={regresar}>Regresar</button>
                    <div className="row mt-3">
                                <div className="col-2"></div>
                                <div className="col-8"><img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101748720%2F448733007984%2F1%2Foriginal.20200524-222415?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=da9328f0ffddaa84d40aa5ccb8b5d69c" className="card-img-top" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">Build a startup community in your city.</h5>
                        <p className="card-text">
                            Would you like to start a startup community but have no resources of your own? Waxdale Pitch Studios is looking for Ecosystem Leaders to operate startup communities in exchange for equity.<br/>
                            Present in Canada and virtually around the globe Waxdale Pitch Studios is basically a simple way for entrepreneurs to pitch their ideas to us without any pressure. The reason why is because all great ideas should be pursued, and money should not be a problem. We bet that we can build a great relationship with would-be entrepreneurs thus, increase our value over time.<br/>
                            We are looking for motivated people who will join us as Ecosystem Leaders and then will move on to positions such as Director General and Chief Ecosystem Officer for a specific region.<br/>
                            We are a technology-based company and we use software solutions to help launch successful startups.<br/>
                            If you are interested, join us on a call!<br/>
                        </p>
                       
                    </div>
                </div>
                )
                break
              default:
                return null;
            }
          })()}
        </div>
    )
}

export default  withRouter(Evento)
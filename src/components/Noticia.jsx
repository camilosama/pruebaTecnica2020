import React from 'react'
import { useParams } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Noticia = (props)  => {

    const {id} = useParams() 
    console.log(id)

    const startTime = new Date();
    
    function regresar(){
        var endTime = new Date();
        let timeDiff = endTime - startTime;
        timeDiff /= 1000;

        var hitorial = JSON.stringify({ pagina : `Noticia: ${id}`, segundos : Math.round(timeDiff), }),
            Historiales = localStorage.getItem('historial');
            Historiales = Historiales ? JSON.parse(Historiales) : [];
        Historiales.push(hitorial);
        localStorage.setItem("historial", JSON.stringify(Historiales)); 
        props.history.push('/Noticias')
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
                                <div className="col-8"> <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1arRIg.img?h=1080&w=1920&m=6&q=60&o=f&l=f&x=579&y=430" className="card-img-top" width="304" height="336" alt="..."></img></div>
                                <div className="col-2"></div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Los porqués de la Procuraduría para pedir que le reduzcan la pena a Andrés Felipe Arias </h5>
                            <p className="card-text">En un concepto enviado a la Corte Suprema de Justicia, la Procuraduría pidió confirmar la sentencia contra el exministro de Agricultura, Andrés Felipe Arias.<br/> El exfuncionario del Gobierno de Álvaro Uribe fue condenado por su rol protagónico en el escándalo de Agro Ingreso Seguro en 2014, pero tras una larga batalla judicial, el alto tribunal se vio obligado a revisar su fallo en segunda instancia. En la intervención que envió la procuradora del caso a la Corte, pidió reducirle la pena de 17 años que le habían impuesto inicialmente. ¿Por qué?<br/>
                            (En contexto: Fiscalía le pidió a la Corte Suprema de Justicia que ratifique condena contra Andrés Felipe Arias)<br/>
                            En su concepto de 29 páginas, la procuradora tercera penal, Myriam Ávila Roldán, pidió confirmar la sentencia condenatoria de hace unos años. Y, a renglón seguido, remató: “se solicita respetuosamente revisar la dosificación de la pena, en particular, lo relacionado con el incremento punitivo”. Según se lee en el documento, la molestia de la funcionaria con los años de pena que le impusieron al exministro Arias tiene que ver con que, a sus ojos y a los de la defensa, en la condena de primera instancia le vulneraron derechos fundamentales.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                )
                break
                case '2':
                    return (
                        <div className="row mt-3">
                            <button type="button" className="btn btn-dark btn-block" onClick={regresar}>Regresar</button>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8"><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1arHt2.img?h=1080&w=1920&m=6&q=60&o=f&l=f" className="card-img-top" width="304" height="336" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title">Estafas en Internet: Circula en WhatsApp falso enlace de Ingreso Solidario </h5>
                                <p className="card-text">A través de redes sociales circula una nueva modalidad de estafa que simula ser un formulario oficial del beneficio del gobierno Ingreso Solidario. El mensaje que se viralizó tiene un enlace que dirige a los usuarios a una página web que tiene errores claros de diseño y redacción.<br/>
                                    Zoom encriptará las viodeollamadas de extremo a extremo<br/>
                                    ¿Esucharía capítulos de series de Netflix como podcast?<br/>
                                    El domininio que dirige a miitli.com, no tiene ninguna vinculación con el Gobierno. Tenga en cuenta que,  incluso el navegador advierte que se está accediendo a un espacio NO seguro. Sin embargo, internautas han hecho caso omiso y terminan cayendo en esta trampa.<br/>
                                    Por su parte, la directora general de Prosperidad Social, Susana Correa Borrero, advirtió que la entidad tomará acciones legales en el caso de suplantación de las páginas web o de solicitud de datos personales para ser beneficiario del programa Ingreso Solidario. </p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    )
                    break
              case '3':
                return (
                    <div className="row mt-3">
                    <button type="button" className="btn btn-dark btn-block" onClick={regresar}>Regresar</button>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8"><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB19bN8O.img?h=1080&w=1920&m=6&q=60&o=f&l=f" className="card-img-top"></img></div>
                        <div className="col-2"></div>
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">Instagram extiende la duración de los videos en directo </h5>
                        <p className="card-text">La red social Instagram introdujo una serie de novedades en los videos en directo de Instagram Live y ha extendido su duración máxima, que pasa de una a cuatro horas, y añadió también un archivo de directos para almacenarlos por un tiempo limitado.<br/>
                        Como anunció el perfil oficial de Instagram en Twitter, los videos en directo de la red social propiedad de Facebook ahora podrán guardarse automáticamente hasta 30 días antes de eliminarse mediante el nuevo archivo de directos.<br/>
                        Hasta el momento, Instagram limitaba la duración de los videos en directo de Live hasta 60 minutos. Entre el resto de medidas destaca que desde ahora pasa a ser posible hacer directos de hasta cuatro horas, como máximo.<br/>
                        Por último, para incrementar la visibilidad de los videos en directo, la red social agregó una nueva sección, ‘Live now’ -'en directo ahora'- en la aplicación de IGTV y en el pestaña Explorar de Instagram.</p>
                       
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

export default  withRouter(Noticia)
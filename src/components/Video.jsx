import React from 'react'
import { useParams,withRouter } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Video = (props)  => {

    const {id} = useParams() 
    console.log(id)

    const startTime = new Date();
    
    function regresar(){
        var endTime = new Date();
        let timeDiff = endTime - startTime;
        timeDiff /= 1000;

        var hitorial = JSON.stringify({ pagina : `Video: ${id}`, segundos : Math.round(timeDiff), }),
            Historiales = localStorage.getItem('historial');
            Historiales = Historiales ? JSON.parse(Historiales) : [];
        Historiales.push(hitorial);
        localStorage.setItem("historial", JSON.stringify(Historiales)); 
        props.history.push('/Videos')
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
                                <div className="col-8"><img src="https://livefluent.com/wp-content/uploads/2019/09/5-best-apps-for-learning-Japanese.jpg" className="card-img-top" className="card-img-top my-4" width="304" height="336" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Japanese Gift Wrapping Is Beautiful</h5>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=SksbEmgBZk8'
                                className='react-player'
                                playing
                                width='100%'
                                height='100%'
                                />
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
                                <div className="col-8"><img src="https://i0.wp.com/aprendergratis.es/wp-content/uploads/2020/01/djfsdfkljdsfjdksfasf.jpg?fit=1024%2C768&ssl=1" className="card-img-top my-4"width="304" height="336" alt="..."></img></div>
                                <div className="col-2"></div>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Calligraphie bullet journal : 20 belles typo </h5>
                                <ReactPlayer
                                url='https://www.youtube.com/watch?v=Jrg36vwv6dc'
                                className='react-player'
                                playing
                                width='100%'
                                height='100%'
                                />
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
                                <div className="col-8"> <img src="https://i.pinimg.com/736x/60/93/f7/6093f7d72470c3b357092d830eea9ffe.jpg" className="card-img-top my-4" width="304" height="336" alt="..."></img></div>
                                <div className="col-2"></div>
                        </div>
                    
                    
                    <div className="card-body">
                        <h5 className="card-title">Videos De Manualidades</h5>
                        
                        <ReactPlayer
                                url='https://www.youtube.com/watch?v=W1qRScUcNs8'
                                className='react-player'
                                playing
                                width='100%'
                                height='100%'
                                />

                       
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

export default  withRouter(Video)
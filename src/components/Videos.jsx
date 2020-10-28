import React from 'react'
import {Link,withRouter} from 'react-router-dom'


const Videos = (props) =>  {

    //const [usuario, setUsuario] = React.useState('')
    //setUsuario(localStorage.getItem("user"))
    //setUsuario(JSON.parse(localStorage.getItem("user")))
    //console.log(usuario)

    function video(){props.history.push('/Video/:id')}

    return (
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src="https://livefluent.com/wp-content/uploads/2019/09/5-best-apps-for-learning-Japanese.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Japanese Gift Wrapping Is Beautiful </h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Video/1'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src="https://i0.wp.com/aprendergratis.es/wp-content/uploads/2020/01/djfsdfkljdsfjdksfasf.jpg?fit=1024%2C768&ssl=1" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Calligraphie bullet journal : 20 belles typo </h5>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"><Link to={'/Video/2'}> consultar </Link> </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            
            <div className="card">
                <img src="https://i.pinimg.com/736x/60/93/f7/6093f7d72470c3b357092d830eea9ffe.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Videos De Manualidades</h5>
                    </div>
                    <div className="card-footer">
                    <span className="text-center"><small className="text-muted"><Link to={'/Video/3'}> consultar </Link></small></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default withRouter(Videos)
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import emailjs from 'emailjs-com'

const Navbar = (props) => {



    const [nombreUser, setNombreUser] = React.useState('')
    const [last_name, setLast_name] = React.useState('')
    const [id, setId] = React.useState('')
    const [number_id, setNumber_id] = React.useState('')
    const [profession, setProfession] = React.useState('')
    const [historial, setHistorial] = React.useState('')
    const [reply_to, setReply_to] = React.useState('wilson.montoya@fusepong.com')
    
    
    React.useEffect(()=> {

        if(localStorage.getItem("user") !== null ){
            const usuarioDato = localStorage.getItem("user");
            var separa = usuarioDato.split("_@@_");

            console.log(usuarioDato)
        
            setNombreUser(separa[0])
            setLast_name(separa[1])
            setId(separa[2])
            setNumber_id(separa[3])
            setProfession(separa[4])
            setHistorial(localStorage.getItem("historial"))
        }

    })

    const cerrarSesion = async(e) => {

        e.preventDefault();

        emailjs.sendForm('castellanos-Dev', 'template_sukrp9f', e.target, 'user_ut7z25WUdXt7eOi7AEkye')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
        });

        localStorage.clear()
        props.history.push('/')
        window.setTimeout(function(){window.location.reload()},2000)
        
    }

    return ( 
        <nav className="navbar navbar-dark  bg-dark m-3">
            <Link className="navbar-brand" to="/"> Prueba Tecnica</Link>
            <div>
                
                    {nombreUser ? (
                        <div className="d-flex">
                            <NavLink className="btn btn-dark mr-2" to="/Noticias" exact>Noticias</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/Eventos" exact>Eventos</NavLink>
                            <NavLink className="btn btn-dark mr-2" to="/Videos" exact>Videos</NavLink>

                            <form onSubmit={cerrarSesion}>

                                <input type="hidden" name="nombreUser" onChange={e => setNombreUser(e.target.value)} value={nombreUser}  />
                                <input type="hidden" name="last_name" onChange={e => setLast_name(e.target.value)} value={last_name} />
                                <input type="hidden" name="id" onChange={e => setId(e.target.value)} value={id}  />
                                <input type="hidden" name="number_id" onChange={e => setNumber_id(e.target.value)} value={number_id} />
                                <input type="hidden" name="profession" onChange={e => setProfession(e.target.value)} value={profession}  />
                                <input type="hidden" name="historial" onChange={e => setHistorial(e.target.value)} value={historial}  />
                                <input type="hidden" name="reply_to" onChange={e => setReply_to(e.target.value)} value={reply_to}  />
                                

                        
                                <input type="submit" className="btn btn-dark" value="cerrar Sesión" />
                            </form>
                        </div>
                    ) : ''}

            
                
            </div>
        </nav>
    ) 
}

export default withRouter(Navbar)
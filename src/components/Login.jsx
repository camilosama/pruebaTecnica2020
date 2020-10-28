import React from 'react'
import {withRouter} from 'react-router-dom'


const Login = (props) => {


    const [nombreUser, setNombreUser] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [tipoDoc, setTipoDoc] = React.useState('')
    const [numDoc, setNumDoc] = React.useState('')
    const [profesion, setProfesion] = React.useState('')
    const [error, setError] = React.useState(null)

    const procesarDatos = (e) => {
        e.preventDefault()
        if(!nombreUser.trim()||!apellido.trim()||!tipoDoc.trim()||!numDoc.trim()||!profesion.trim()){
            setError('Complete todos los campos')
            return
        }
        setError(null)
        ingreso()
    }


    const ingreso = () => {
        setError(null)
        localStorage.setItem("user", nombreUser+'_@@_'+apellido+'_@@_'+tipoDoc+'_@@_'+numDoc+'_@@_'+profesion);
       // localStorage.setItem("user", JSON.stringify(nombre+'_@@_'+apellido+'_@@_'+tipoDoc+'_@@_'+numDoc+'_@@_'+profesion));
       cambio()
    }

    function cambio(){props.history.push('/Menu')}

    return (
        <div className="mt-5">
            <h3 className="text-center"> Ingreso al portal</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-sm-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        { error !==  null ? <li className="list-group-item list-group-item-danger text-left mb-2">{error}</li> : ''}
                        <input className="form-control mb-2" type="text" placeholder="Ingrese su nombre" onChange={ e => setNombreUser(e.target.value)} value={nombreUser}></input>
                        <input className="form-control mb-2" type="text" placeholder="Ingrese su apellido" onChange={ e => setApellido(e.target.value)} value={apellido}></input>
                        <select className="form-control mb-2" onChange={ e => setTipoDoc(e.target.value)} value={tipoDoc}>
                            <option value=" ">Seleccione una opcion</option>
                            <option value="CC">Cedula de Ciudadania</option>
                            <option value="TI">Tarjeta de identidad</option>
                            <option value="CE">Cedula de Extranjeria</option>
                        </select>
                        <input className="form-control mb-2" type="text" placeholder="Ingrese su numero Docuemnto" onChange={ e => setNumDoc(e.target.value)} value={numDoc}></input>
                        <input className="form-control mb-2" type="text" placeholder="Ingrese su profesion" onChange={ e => setProfesion(e.target.value)} value={profesion}></input>
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Ingresar</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)
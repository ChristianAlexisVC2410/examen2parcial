import React from 'react'
import { useState } from 'react';
import NavBar from '../components/NavBar'
import {parse, v4 as uuid} from 'uuid';
import { useNavigate, Outlet } from 'react-router-dom';
import Participantes from '../components/Participantes';

const PantallaRegistro = () => {

    let listImg = ['http://icon-library.com/images/batman-icon/batman-icon-21.jpg','https://cdn.pixabay.com/photo/2019/11/20/06/10/spider-man-4639214_960_720.png',
'https://cdn.pixabay.com/photo/2021/06/03/11/50/flash-6306911_1280.png'];
    const[displayimg, setDisplayimg] = useState(false);

    var arreglo=[]
    var consulta=JSON.parse(localStorage.getItem('participantes'))
    if (consulta==null) {
        arreglo.push(consulta)
    }else{
        
    arreglo=consulta
    }


    const [participantes, setParticipantes] = useState({nombre: "", apellido: "", email: "", twitter: "", avatar: ""});

    const { nombre, apellido, email, twitter ,avatar} = participantes


    const handleChange=(e)=>{

        e.preventDefault();
        setParticipantes({
            ...participantes,
            [e.target.name]: e.target.value,
        })
    };

    const actionAdd={
        id: uuid(),
        nombre,
        apellido,
        email,
        twitter,
        avatar
    }

    const handleAgregras=()=>{
      if(nombre && apellido && email && twitter && avatar){
        arreglo.push(actionAdd)
        localStorage.setItem('participantes', JSON.stringify(arreglo))
        setDisplayimg(false)
        handleLista();
        }else{
            alert('Todos los campos son obligatorios')
        }

    }

    const handleLista = () => {
        navigate('/listado');
    }

    const navigate=useNavigate();





  return (
    <div className='container'>
      
    <div className='container-fluid mt-3'>
    <NavBar/>
    <div className='card'>
        <div className='card-header text-center'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='text-center'>Pantalla de Registro</h2>
                </div>
              
            </div>        
        </div>
        <div className='card-body'>
   
            <div className='row'>
                <form className='form-group'> 

                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input
                            onChange={handleChange}
                             name='nombre'
                             value={nombre}
                            type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='apellido'>Apellido</label>
                            <input 
                            onChange={handleChange}
                            name='apellido'
                            value={apellido}
                            type='text' className='form-control' id='apellido' placeholder='Ingrese su apellido' required/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='correo'>Correo</label>
                            <input 
                            onChange={handleChange}
                            name='email'
                            value={email}
                            type='email' className='form-control' id='email' placeholder='Ingrese su correo' required/>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='twitter'>twitter</label>
                            <input 
                            onChange={handleChange}
                            name='twitter'
                            value={twitter}
                            type='text' className='form-control' id='twitter' placeholder='Ingrese su twitter' required/>
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    
                    {
                        listImg.map(result=>(
                            <div className='col-sm-4'>
                            <div className='form-group'>
                                <div>
                                    <img className='border border-success' width={"200"} height={"200"}
                                    src={result} />
                                </div>
                                <label htmlFor='avatar'>seleccionar avatar</label>
                                <input 
                                 onChange={handleChange}
                                 name='avatar'
                                 value={result}
                                type='radio' className='' id='avatar' />
                            </div>
                        </div>
                        )) 

                    }
              
              
                </div>
                <div className='row my-3'>
                    <div className='col-sm-12'>
                        <div className='form-group'>
                            <label>Leido y aceto todas la condiciones</label>
                            <input  type='checkbox' className='mr-2' id='condiciones' required/>
                        </div>
                    </div>
                </div>

                <div className='mx-1 d-grid gap-2'>
                    <button onClick={handleAgregras}  type='submit' className='btn btn-primary'>Registrar</button>
                </div>
      
                </form>
            </div>
           
           
        </div> 
    </div>
</div>
<Outlet />
</div>
  )
}

export default PantallaRegistro
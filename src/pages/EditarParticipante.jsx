import React, { useReducer ,useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { v4 as uuid } from "uuid";
import NavBar from '../components/NavBar';
import PantallaRegistro from '../pages/PantallaRegistro';
import {ParticipanteReducer} from '../reducers/ParticipanteReducer';


const EditarParticipante = () => {

    const {id} = useParams();

    const {img1} = useParams();

    let listImg = ['http://icon-library.com/images/batman-icon/batman-icon-21.jpg','https://cdn.pixabay.com/photo/2019/11/20/06/10/spider-man-4639214_960_720.png',
    'https://cdn.pixabay.com/photo/2021/06/03/11/50/flash-6306911_1280.png'];
        const[displayimg, setDisplayimg] = React.useState('http://icon-library.com/images/batman-icon/batman-icon-21.jpg');
        const[displayimg2, setDisplayimg2] = React.useState('https://cdn.pixabay.com/photo/2019/11/20/06/10/spider-man-4639214_960_720.png');
        const[displayimg3, setDisplayimg3] = React.useState('https://cdn.pixabay.com/photo/2021/06/03/11/50/flash-6306911_1280.png');


       var local=[];
       local = JSON.parse(localStorage.getItem('participantes'));
       const participante = local.filter(el => el != null)
       const p=participante.find(el => el.id === id);
        // var p;


         const [data, setData] =useState({id:p.id,nombre:p.nombre,apellido:p.apellido,email:p.email,twitter:p.twitter,avatar:p.avatar});
        
        const {nombre,apellido,email,twitter,avatar} = data;

             const handleChange=(e)=>{
                setData({
                    ...data,
                    [e.target.name]:e.target.value
                });
            };

            const handleEdit=()=>{
                if(nombre && apellido && email && twitter && avatar){
                    p.nombre=data.nombre;
                    p.apellido=data.apellido;
                    p.email=data.email;
                    p.twitter=data.twitter;
                  
                    if(displayimg){
                        p.avatar=displayimg;
                    }else if(displayimg2){
                        p.avatar=displayimg2;
                    }else if(displayimg3){

                        p.avatar=displayimg3;
                    }
                    localStorage.setItem('participantes',JSON.stringify(local));

                    alert('Participante editado con exito');
                    handleLista();
                }else{
                    alert('Todos los campos son obligatorios');
                }
            }

            const handleLista=()=>{
                navigate('/listado');
            }
            

            const [user,setState] = useState(participante[0]);
        
            const navigate=useNavigate();

            const handleRutaProtegida=e=>{
                if(user!=null){
                    setUser(null);
                    navigate('/listado')
                }
             
            }
    
           


if(img1=='imagen1'){
  return (
    <div className='container'>
      
    <div className='container-fluid mt-3'>
<NavBar/>
    <div className='card'>
        <div className='card-header text-center'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h2 className='text-center'>Pantalla Editar</h2>
                </div>
              
            </div>        
        </div>
        <div className='card-body'>
            
            <div className='row'>
                <form className='form-group'> 

                

                <div className='row'>

                <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='id'></label>
                            <input
                            onChange={handleChange}
                             name='id'
                             value={data.id}
                            type='hidden' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <button className='btn btn-danger' onClick={handleRutaProtegida}>Regresar</button>
                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='nombre'>Nombre</label>
                            <input
                            onChange={handleChange}
                             name='nombre'
                            value={data.nombre}
                            type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='apellido'>Apellido</label>
                            <input 
                        onChange={handleChange}
                            name='apellido'
                            value={data.apellido}
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
                            value={data.email}
                            type='email' className='form-control' id='email' placeholder='Ingrese su correo' required/>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='form-group'>
                            <label htmlFor='twitter'>twitter</label>
                            <input 
                       onChange={handleChange}
                            name='twitter'
                            value={data.twitter}
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
                                 
                                 name='avatar'
                                 value={result}
                                type='radio' className='' id='avatar'
                                checked={displayimg===result} onChange={(e)=>setDisplayimg(e.target.value)} />
                            </div>
                        </div>
                        )) 

                    }
              
              
                </div>
         

                <div className='mx-1 d-grid gap-2'>
                    <button onClick={handleEdit} type='button' className='btn btn-primary'>Editar</button>
                </div>
      
                </form>
            </div>

           
        </div> 
    </div>
</div>

</div>
  )
    }else if(img1=='imagen2'){
        return (
            <div className='container'>
      
            <div className='container-fluid mt-3'>
            <NavBar/>
            <div className='card'>
                <div className='card-header text-center'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h2 className='text-center'>Pantalla de Editar</h2>
                        </div>
                      
                    </div>        
                </div>
                <div className='card-body'>
                    
                    <div className='row'>
                    <form className='form-group'> 

                

<div className='row'>

<div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='id'></label>
            <input
            onChange={handleChange}
             name='id'
             value={data.id}
            type='hidden' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
        </div>
    </div>

    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input
            onChange={handleChange}
             name='nombre'
            value={data.nombre}
            type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
        </div>
    </div>
    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='apellido'>Apellido</label>
            <input 
        onChange={handleChange}
            name='apellido'
            value={data.apellido}
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
            value={data.email}
            type='email' className='form-control' id='email' placeholder='Ingrese su correo' required/>
        </div>
    </div>
    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='twitter'>twitter</label>
            <input 
       onChange={handleChange}
            name='twitter'
            value={data.twitter}
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
                 
                 name='avatar'
                 value={result}
                type='radio' className='' id='avatar'
                checked={displayimg2===result} onChange={(e)=>setDisplayimg2(e.target.value)} />
            </div>
        </div>
        )) 

    }


</div>


<div className='mx-1 d-grid gap-2'>
    <button onClick={handleEdit} type='button' className='btn btn-primary'>Editar</button>
</div>

</form>
                    </div>
        
                   
                </div> 
            </div>
        </div>

        </div>
          )
            }else if(img1=='imagen3'){
                return (
            
                    <div className='container'>
      
                    <div className='container-fluid mt-3'>
                    <NavBar/>
                    <div className='card'>
                        <div className='card-header text-center'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <h2 className='text-center'>Pantalla de Editar</h2>
                                </div>
                              
                            </div>        
                        </div>
                        <div className='card-body'>
                            
                            <div className='row'>
                            <form className='form-group'> 

                

<div className='row'>

<div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='id'></label>
            <input
            onChange={handleChange}
             name='id'
             value={data.id}
            type='hidden' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
        </div>
    </div>

    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input
            onChange={handleChange}
             name='nombre'
            value={data.nombre}
            type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' required/>
        </div>
    </div>
    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='apellido'>Apellido</label>
            <input 
        onChange={handleChange}
            name='apellido'
            value={data.apellido}
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
            value={data.email}
            type='email' className='form-control' id='email' placeholder='Ingrese su correo' required/>
        </div>
    </div>
    <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor='twitter'>twitter</label>
            <input 
       onChange={handleChange}
            name='twitter'
            value={data.twitter}
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
                 
                 name='avatar'
                 value={result}
                type='radio' className='' id='avatar'
                checked={displayimg3===result} onChange={(e)=>setDisplayimg3(e.target.value)} />
            </div>
        </div>
        )) 

    }


</div>


<div className='mx-1 d-grid gap-2'>
    <button onClick={handleEdit} type='button' className='btn btn-primary'>Editar</button>
</div>

</form>
                            </div>
                
                           
                        </div> 
                    </div>
                </div>
            
                </div>
                  )
                    }
}

export default EditarParticipante
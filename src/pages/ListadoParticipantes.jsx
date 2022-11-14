import {useState} from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom"
import NavBar from '../components/NavBar';
import md5 from 'md5';
import { Editar } from '.';
import { ProtectedRoute } from '../components/ProtectedRoute';



const ListadoParticipantes = ({participantes=[]}) => {

    const navigate = useNavigate();
    const handleClickAgregar = () => {
        navigate('/registro');
    }
    


    if(participantes.length===0){

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <NavBar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center">No hay participantes registrados</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={handleClickAgregar} className="btn btn-primary btn-lg ">Agregar Participante</button>
                    </div>
                </div>
            </div>
        )
    }else{

   

  return (
    <div className='container-fluid mt-3'>
        <NavBar/>
        <div className='card'>
            <div className='card-header text-center'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h2 className='text-center'>Listado de Participantes</h2>
                    </div>
                    <div className='col-sm-4'>
                        <button onClick={handleClickAgregar} className='btn btn-primary'>Agregar Participante</button>
                    </div>
                </div>
               
            </div>
            <div className='card-body'>
                <div className='row'>
                    {
                        participantes.map((i)=>{
                            const [user, setUser] = useState(null);

                            const handleRutaProtegida=e=>{
                               if(user!=null){
                                setUser(i);
                                   navigate('/editar/:id/:img1')
                                 }else{
                                      navigate('/registro')
                                      setUser(null);
                                    }
                            }

                            const handleRutaProtegida2=e=>{
                                if(user==null){
                                    setUser(null);
                                    navigate('/registro')
                                }else{
                                    navigate('/editar/:id/:img1')
                                    setUser(i);
                                }
                            }
                    
                          <ProtectedRoute user={user} redirectTo="/listado">
                                <Route path={'/editar/:id/:img1'} element={<Editar/>} />
                        </ProtectedRoute>
                        
                            var img1 = i.avatar.replace("http://icon-library.com/images/batman-icon/batman-icon-21.jpg","imagen1"); 
                            var img2 = i.avatar.replace("https://cdn.pixabay.com/photo/2019/11/20/06/10/spider-man-4639214_960_720.png","imagen2");
                            var img3 = i.avatar.replace("https://cdn.pixabay.com/photo/2021/06/03/11/50/flash-6306911_1280.png","imagen3");
                            
                            if(img1=="imagen1"){
                                img1=img1;
                            }
                            else if(img1!=="imagen1" && img2!=="imagen2" ){
                                img1 = img3;
                            }else if(img1!=="imagen2" && img3!=="imagen3" ){
                                img1 = img2;
                            }else if(i.avatar=="imagen1"){
                                img1 = img1;
                            }

                            return(
                                <div className='col-sm-4' key={i.id}>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h4 className='text-center'>{i.nombre} {i.apellido}</h4>
                                        </div>
                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <img src={i.avatar}  className='img-fluid' height={"200"} width={"200"}/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <p className='text-center'>{i.twitter}</p>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <p className='text-center'>{i.email}</p>
                                             
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                      {
                                        user ? (
                                            
                                            <Link to={`/editar/${i.id}/${img1}`}
                                            className='btn btn-primary btn-block'
                                            onClick={handleRutaProtegida2}>Editar</Link>
                                        ) : (
                                      
                                            <Link to={`/editar/${i.id}/${img1}`}
                                            className='btn btn-primary btn-block'
                                            onChange={handleRutaProtegida}>Ver Detalles</Link>
                                        )

                                      }
                                                
                                                
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )       
                        })
                    }
                </div>
            </div> 
        </div>
</div>
  )
}

}
    
export default ListadoParticipantes
import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom';

const PaginaPrincipal = () => {
  
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/listado');
    }

    return (
        <div className="container">
         <div className="row">
           <div className="card">
             <div className="card-header text-center">
               <h2 className="card-title">Congreso de Tecnologías de la Información</h2>
             </div>
           </div>
         </div>
         <div className="row">
             <div className="col-sm-3">
     
             </div>
             <div className="col-sm-3">
               <div>
                 <img className="" src="./src/img/UTL.png" alt="Tics" width={300} height={300}/>
               </div>
               <div>
                 <h3></h3>
               </div>
             
             </div>
             <div className="col-sm-3">
               <div>
               <img className="" src="./src/img/Tics.png" alt="Tics" width={300} height={300}/>
               </div>
     
           
             </div>
             <div className="col-sm-3">
     
             </div>
           </div>
           <div className="row mt-4">
           <div className="col-sm-5 ">  </div>
               <div className="col-sm-3 ml-5">
                   <button onClick={handleClick} className="btn btn-primary btn-lg ">Entrar</button> 
               </div>
           </div>
     
           
     
            
        </div>
       )
}

export default PaginaPrincipal
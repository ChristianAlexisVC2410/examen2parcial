import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
<div className='mb-2'>
<nav className="navbar  navbar-light bg-light">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/principal">
      <img width={"50"} height={"50"} src='./../../src/img/Tics.png' />
      </NavLink>
        <NavLink className="navbar-brand" to="/principal">Inicio</NavLink>
        <NavLink className="navbar-brand" to="/listado">Participantes</NavLink>
        <NavLink className="navbar-brand" to="/registro">Registro</NavLink>
        <NavLink className="navbar-brand" to="/principal">
      <img width={"50"} height={"50"} src='./../../src/img/UTL.png' />
      </NavLink>
    </div>
        </nav>
</div>
        

   
  )
}

export default NavBar
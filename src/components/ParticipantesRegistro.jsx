import React, { useReducer ,useEffect,useState} from 'react';
import PantallaRegistro from '../pages/PantallaRegistro';
import {ParticipanteReducer} from '../reducers/ParticipanteReducer';

const init=()=>{
  const participantes=localStorage.getItem('participantes');
  return participantes ? JSON.parse(participantes) : [];
}

const ParticipantesRegistro = () => {

  const [state, dispatch]= useReducer(ParticipanteReducer, [], init);


  useEffect(()=>{
      //Creamos el localStorage 
      localStorage.setItem('participantes', JSON.stringify(state));
    },[state]);
  
  return (

   <div></div>

  )
}

export default ParticipantesRegistro
import React, { useReducer ,useEffect,useState} from 'react';
import ListadoParticipantes from '../pages/ListadoParticipantes';
import {ParticipanteReducer} from '../reducers/ParticipanteReducer';


const init=()=>{
    const participantes=localStorage.getItem('participantes');
    return participantes ? JSON.parse(participantes) : [];
}

const Participantes = () => {

    const [state, dispatch]= useReducer(ParticipanteReducer, [], init);


    useEffect(()=>{
        //Creamos el localStorage 
        localStorage.setItem('participantes', JSON.stringify(state));
      },[state]);
  
    

  return (
    <ListadoParticipantes participantes={state}/>

  )
}

export default Participantes
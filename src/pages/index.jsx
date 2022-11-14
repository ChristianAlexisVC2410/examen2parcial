import {Navigate} from 'react-router-dom';
import ListadoParticipantes from './ListadoParticipantes';
import PaginaPrincipal from './PaginaPrincipal';
import PantallaRegistro from './PantallaRegistro';
import Participantes from '../components/Participantes';
import ParticipantesRegistro from '../components/ParticipantesRegistro';
import EditarParticipante from './EditarParticipante';
import ParticipantesEditar from '../components/ParticipantesEditar';

export const Principal = () =><PaginaPrincipal/>;

export const Listado = () =>{
 
    return <Participantes/>
} 
 
export const Registro = () => {
    return <PantallaRegistro/>
}

export const Editar = () => {
    return <EditarParticipante/>
}


export const Analytics = () => <h2>Analytics(Private,permission:'analize')</h2>

export const Admin = () => <h2>Admin(Private,permission:'admin')</h2>
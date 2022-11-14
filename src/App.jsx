import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Principal, Listado, Registro, Editar } from "./pages"
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {



  var local = [];
  local = JSON.parse(localStorage.getItem('participantes'));

  if(local===null){
    local=[];
  }
  else{
    local=local;
  }

  const participante = local.filter(el => el != null);
  const p=participante.length;
  const [participantes, setParticipantes] = useState(participante);
  const [participanteSeleccionado, setParticipanteSeleccionado] = useState(null);
  const [participanteEditar, setParticipanteEditar] = useState(null);
  const [user, setUser] = useState([]);

  const handleLogin = (user) => {
    setUser(user);
  }

  const handleLogout = () => {
    setUser(null);
  }


  return <BrowserRouter>

    <Routes>
      <Route index element={<Principal />} />
      <Route path="/principal" element={<Principal />} />
      <Route path="/listado" element={<Listado />} />
      <Route path={'/registro'} element={<Registro />} />
        <Route element={<ProtectedRoute user={user}/>}>
                <Route path={'/editar/:id/:img1'} element={<Editar/>} />
        </Route>
  

    </Routes>
  </BrowserRouter>
}





export default App
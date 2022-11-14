import {Navigate, Outlet} from 'react-router-dom';

export const ProtectedRoute = ({user, children,redirectTo="/listado" }) => {
    if(!user){
        return <Navigate to={redirectTo} />
    }else{
        return children ? children : <Outlet />
    }
  
}
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import AppContext from './AppContext';

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
    const context = useContext(AppContext);
    let location = useLocation();

    if (!context.user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;


}

export default RequiredAuth
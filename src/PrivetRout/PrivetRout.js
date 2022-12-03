import React, { Children, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contex/Contex';
import Spiner from '../Pages/Spiner';

const PrivetRout = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();
    if (loding) {
        return <Spiner></Spiner>;
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
}

export default PrivetRout

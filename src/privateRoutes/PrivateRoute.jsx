import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return ( <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div> );
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;
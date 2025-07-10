import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const AdminRoutes = ({children}) => {

    const {userInfo,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return ( <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div> );
    }

    if(userInfo && userInfo?.role == 'admin'){
        return children;
    }

    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default AdminRoutes;
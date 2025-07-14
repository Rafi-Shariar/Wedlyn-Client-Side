import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import LottiLoading from '../components/shared/LottiLoading';
import Forbidden from '../components/shared/Forbidden';

const UserRoutes = ({children}) => {

    const {userInfo,loading} = use(AuthContext);

    if(loading){
        return <LottiLoading/>;
    }


    if(userInfo && userInfo?.role !== 'user'){
        return <Forbidden/>;
    }

    return children;
};

export default UserRoutes;
import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LottiLoading from '../../components/shared/LottiLoading';
import AdminDashboardHome from './Admin/AdminDashboardHome';
import UserDashbaordHome from './User/UserDashbaordHome';

const DashboardHome = () => {
    const {userInfo, loading} = use(AuthContext);

    if(loading) return <LottiLoading/>;

    if(userInfo &&  userInfo?.role === 'admin') return <AdminDashboardHome></AdminDashboardHome>;

    return <UserDashbaordHome/>
};

export default DashboardHome;
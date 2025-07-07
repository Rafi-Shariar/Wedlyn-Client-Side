import React from 'react';
import ScrollToTop from '../components/shared/ScrollToTop';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';



const RootLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <section className='p-2'>
                <Navbar></Navbar>
            </section>
            <section className='max-w-7xl mx-auto p-2'>
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default RootLayout;
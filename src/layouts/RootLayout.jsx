import React from 'react';
import ScrollToTop from '../components/shared/ScrollToTop';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';



const RootLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar></Navbar>
            <section className='max-w-7xl mx-auto p-2 min-h-screen '>
                <Outlet></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;
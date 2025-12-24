import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../ScrollTop/ScrollToTop';



const Root = () => {
    return (
        <div className=' font-manrope'>
           <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
              
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
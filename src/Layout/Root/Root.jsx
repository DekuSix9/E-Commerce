import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../ScrollTop/ScrollToTop';
import Cart from '../../Pages/Cart/Cart';


const Root = () => {
    return (
        <div className=' font-manrope'>
           <ScrollToTop></ScrollToTop>
            <Navbar></Navbar>
            <Cart/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
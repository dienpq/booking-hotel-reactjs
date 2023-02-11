import React from 'react';
import Header from "../../blogs/Header";
import Footer from "../../blogs/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
            <Outlet />
        </div>
    );
};

export default Layout;
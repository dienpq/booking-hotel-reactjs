import React from 'react';
import Header from "../../blogs/Header";
import Footer from "../../blogs/Footer";
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
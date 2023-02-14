import React from 'react';
import Header from "../../blogs/Header";
import Footer from "../../blogs/Footer";
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Box marginTop='100px'>{children}</Box>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
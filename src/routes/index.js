import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Accout from "../pages/Accout";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/accout',
                element: <Accout />
            },
        ]
    },

])

export { router }
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Accout from "../pages/Accout";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import HotelItem from "../pages/HotelItem";

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
            {
                path: '/hotel',
                element: <Hotel />
            },
            {
                path: '/hotel/:id',
                element: <HotelItem />
            },
            {
                path: '/hotel/:id/room/:id/booking',
                element: <Booking />
            }
        ]
    },

])

export { router }
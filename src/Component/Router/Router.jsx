
import AboutUs from "../AboutUs/AboutUs";
import AddHouse from "../AddHouse/AddHouse";
import ContactUS from "../ContactUS/ContactUS";
import Home from "../Home/Home";
import Main from "../Main/Main";
import { createBrowserRouter } from 'react-router-dom';
import Login from "../UserEntryFrom/Login";
import SingUp from "../UserEntryFrom/SingUp";


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-new-house',
                element: <AddHouse></AddHouse>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUS></ContactUS>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: 'singup',
        element: <SingUp></SingUp>
    }
])

export default myCreatedRouter;
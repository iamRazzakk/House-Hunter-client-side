
import AboutUs from "../AboutUs/AboutUs";
import AddHouse from "../AddHouse/AddHouse";
import ContactUS from "../ContactUS/ContactUS";
import Home from "../Home/Home";
import Main from "../Main/Main";
import { createBrowserRouter } from 'react-router-dom';
import Login from "../UserEntryFrom/Login";
import SingUp from "../UserEntryFrom/SingUp";
import Photo from "../MorePhoto/Photo";
import Dashboard from "../Dashboard/Dashboard";
import MyProperty from "../Dashboard/MyProperty";
import UpdateProperty from "../Dashboard/UpdateProperty";


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
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUS></ContactUS>
            },
            {
                path: 'more-photo',
                element: <Photo></Photo>
            }

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: 'singup',
        element: <SingUp></SingUp>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/add-new-house',
                element: <AddHouse></AddHouse>
            },
            {
                path: '/dashboard/property',
                element: <MyProperty></MyProperty>,
            },
            {
                path: '/dashboard/owner/:id',
                element: <UpdateProperty></UpdateProperty>,
            }
        ]
    }
])

export default myCreatedRouter;
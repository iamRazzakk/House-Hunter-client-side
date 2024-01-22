
import Home from "../Home/Home";
import Main from "../Main/Main";
import { createBrowserRouter } from 'react-router-dom';


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])

export default myCreatedRouter;
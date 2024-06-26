import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../component/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DonorForm from "../pages/donorForm/DonorForm";
import { BASE_URL } from "../constVariables/constVariable";
import PrivateRouter from "./PrivateRouter";
import Post from "../pages/post/Post";
import DonorList from "../pages/donorList/DonorList";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/donor-register',
                element: <PrivateRouter><DonorForm></DonorForm></PrivateRouter>
            },
            {
                path: '/do-post',
                element: <PrivateRouter><Post></Post></PrivateRouter>
            },
            {
                path: '/donor-list',
                element: <PrivateRouter><DonorList></DonorList></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard'
    }
])

export default router;
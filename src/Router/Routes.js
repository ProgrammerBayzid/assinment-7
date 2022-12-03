import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import Contact from "../Pages/Contact";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import Profile from "../Pages/Profile";
import Services from "../Pages/Services";
import PrivetRout from "../PrivetRout/PrivetRout";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Errorpage></Errorpage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/checkOut/:id',
                element: <PrivetRout><CheckOut></CheckOut></PrivetRout>,
                loader: ({ params }) => fetch(`https://genius-car-server-beryl-nu.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivetRout><Orders></Orders></PrivetRout>
            }
        ]
    }
])

import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Contact from "../Pages/Contact";
import Login from "../Components/AuthComponents/Login/Login";
import Register from "../Components/AuthComponents/Register/Register";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element : <HomeLayout/>,
        children : [
            {
                index : true,
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard/></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }

        ]
    }
])
export default router
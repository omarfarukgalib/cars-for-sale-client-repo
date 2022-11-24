import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          {
            path:'/about',
            element:<About></About>
          },
          
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<Signup></Signup>
          },


        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])
export default router
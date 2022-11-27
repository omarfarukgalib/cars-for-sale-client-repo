import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import CarsCatagories from "../../Pages/Home/CarsCatagories/CarsCatagories";
import Home from "../../Pages/Home/Home/Home";
import Honda from "../../Pages/Home/Honda/Honda";
import Hyundai from "../../Pages/Home/Hyundai/Hyundai";
import Nissan from "../../Pages/Home/Nissan/Nissan";

import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Notfound from "../Notfound/Notfound";

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
            path:'/hyundai',
            element:<Hyundai></Hyundai>
          },
          {
            path:'/nissan',
            element:<Nissan></Nissan>
          },
          {
            path:'/honda',
            element:<Honda></Honda>
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
         

        ],
       
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    },
    {
        path:'*',
        element:<Notfound></Notfound>
    }
])
export default router
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Signup from './components/Signup.jsx'
import FlatDetails from './components/Flatdetail.jsx'
import MaintenanceDetails from './components/Maintenancedetails.jsx'
import axios from 'axios'
const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'/',
      element:<App/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/addflat',
      element:<FlatDetails/>
    },
    {
      path:'/addmaintenance',
      element:<MaintenanceDetails/>
    },
  ]
  }
])
axios.defaults.withCredentials =true;
ReactDOM.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Register,Login,Home } from './components/index.js'

import Header from './components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home1 from './components/Home/Home1.jsx'
import Book1 from './components/Books/Book1.jsx'
import About from './components/About/About.jsx'
import About1 from './components/About/About1.jsx'
import Admin from './components/Admin/Admin.jsx'
import AdminLayout from './components/Admin/AdminLayout.jsx'
import Upload from './components/Admin/Upload.jsx'
import Manage from './components/Admin/Manage.jsx'
import Edit from './components/Admin/Edit.jsx'
import User from './components/Admin/Users.jsx'

const router=createBrowserRouter(
  [{
    path:"/",
    element:<Layout/>,
    children:[
      
      {
        path:"",
        element:<Home/>,
        
      },
      {
        path:"about",
        element:<About/>
      }
      

      
  ]},
  {
    path:"register",
    element:<Register/>,
  },
  {
    path:"login",
    element:<Login/>,
  },
  {
    path:"home",
    element:<Home1/>
  }
  ,{
    path:"books",
    element:<Book1/>
  },
  {
    path:"about1",
    element:<About1/>
  }
  ,
  {
    path:"/admin",
    element:<AdminLayout/>,
    children:[
      {
        path:"/admin",
        element: <Admin/>
      },
      {
        path:"/admin/upload",
        element: <Upload/>
      },
      {
        path:"/admin/manage",
        element: <Manage/>
      },
      {
        path:"/admin/edit",
        element: <Edit/>,
        // loader:({params})=>fetch()
      },
      {
        path:"/admin/users",
        element: <User/>
      },
      

    ]
  }


    ]  
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

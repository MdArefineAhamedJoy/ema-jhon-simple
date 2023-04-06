import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import Home from './component/Home/Home';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import Logging from './component/Loging/Loging';
import cartProductLoader from './Loader/cartProductLoader';
import ProceedCheckout from './component/ProceedCheckout/ProceedCheckout';

const router  = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'order',
        element:<Order></Order>,
        loader: cartProductLoader
      },
      {
        path:"inventory",
        element:<Inventory></Inventory>
      },
      {
        path:'login',
        element:<Logging></Logging>
      },{
        path:'proceedCheckout',
        element:<ProceedCheckout></ProceedCheckout>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

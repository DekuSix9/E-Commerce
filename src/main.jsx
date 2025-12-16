import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Layout/Home/Home';
import CategoryDetails from './Pages/CategoryDetail/CategoryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'category/:category',
        element:<CategoryDetails></CategoryDetails>,
        loader:async()=>{
          const res=await fetch('/products.json');
          return res.json();
        }
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

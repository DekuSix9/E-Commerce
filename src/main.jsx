import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Layout/Home/Home';
import CategoryDetails from './Pages/CategoryDetail/CategoryDetails';
import CartContext from './Layout/CartContext/CartContext';

import CartDetails from './Pages/CartDetails/CartDetails';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvide from './Provider/AuthProvider/AuthProvide';
import PrivateLayout from './Layout/PrivateLayout/PrivateLayout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'category/:category',
        element: <CategoryDetails />,
        loader: async () => {
          const res = await fetch('/products.json');
          return res.json();
        }
      },

    {
      path:'cart',
      element:<PrivateLayout><CartDetails/></PrivateLayout>   
    },
    {
      path:'checkout',
      element:<PrivateLayout><CheckOut/></PrivateLayout>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'register',
      element:<Register></Register>
    }
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvide>
      <CartContext>
      <RouterProvider router={router} />
    </CartContext>
    </AuthProvide>
   
   
   
  </StrictMode>,
);

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
import Cart from './Pages/Cart/Cart';

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

    
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <RouterProvider router={router} />
    </CartContext>
  </StrictMode>,
);

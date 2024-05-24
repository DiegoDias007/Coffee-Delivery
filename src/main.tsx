import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import Order from './pages/Order.tsx'
import Cart from './pages/Cart.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { Toaster } from 'sonner'
import { OrderProvider } from './contexts/OrderContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "order",
        element: <Order />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrderProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster 
          richColors
        />
      </CartProvider>
    </OrderProvider>
  </React.StrictMode>,
)

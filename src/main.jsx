import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.scss'
import {RouterProvider} from "react-router-dom";
import router from "./router"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsProvider } from './context/productsContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>,
)

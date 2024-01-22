import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRouter from './Component/Router/Router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}>
    </RouterProvider>
  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRouter from './Component/Router/Router';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] mx-auto font-antonio'>
    <React.StrictMode>
      <RouterProvider router={myCreatedRouter}>
      <Toaster />
      </RouterProvider>
    </React.StrictMode>
  </div>
)
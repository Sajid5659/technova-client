import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Router.jsx'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'
import DataProvider from './Provider/AuthProvider/DataProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={router}></RouterProvider>
      </DataProvider>
    </AuthProvider>
  </StrictMode>,
)

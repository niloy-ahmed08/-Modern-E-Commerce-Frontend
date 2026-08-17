import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router, } from './Router.js'
import { Provider } from 'react-redux'
import Store from './Store.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={Store}>
     <RouterProvider router={router} />
        <ToastContainer />
    </Provider>
  </StrictMode>,
)

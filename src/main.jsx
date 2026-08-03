import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router, } from './Router.js'
import { Provider } from 'react-redux'
import Store from './Store.js'



createRoot(document.getElementById('root')).render(

  <StrictMode>
     <Provider store={Store}>
     <RouterProvider router={router} />
     </Provider>
  </StrictMode>,
)

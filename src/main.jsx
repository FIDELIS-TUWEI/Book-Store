import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
   createBrowserRouter, 
   RouterProvider
 } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/Root'
import Error from './Error'
import Contact from './routes/Contact'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

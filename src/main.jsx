import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
   createBrowserRouter, 
   RouterProvider
 } from 'react-router-dom'
import Root, { 
  loader as rootLoader,
  action as rootAction 
} from './routes/Root'
import Error from './Error'
import Contact, { loader as contactLoader } from './routes/Contact'
import EditContact from './routes/Edit'

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
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],
  },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import PetList from './components/PetList/PetList.jsx'
import PetForm from './components/PetForm/PetForm.jsx'


const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <PetList />,
      },
      {
        path: "pets/:pet_id",
        element: <PetForm />,
      },
    ]
  },
]

const router = createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

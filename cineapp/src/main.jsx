import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './Pages/Filmes.jsx'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import PagNotFound from './Pages/PagNotFound.jsx'
import Home from './Pages/Home.jsx'
import App from './App'

const router = createBrowserRouter(
  [
    {
      path : "/",
      element: <App/>,
      children: [
        {path: true, element:<Home/>},
        {path: "filmes", element:<Filmes/>},
        {path: "sobre", element: <Sobre/>},
        {path: "contato", element: <Contato/>},
        {path: "*", element: <PagNotFound/>},
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

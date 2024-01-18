import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";


const routes = [
    {
        path: "/NeuraChatAi/",
        element: <App/>,
        children: [
            {
                path: "/NeuraChatAi/",
                element: <Home/>,
            },
            {
                path: "/NeuraChatAi/about",
                element: <About/>,
            }
        ]
    }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

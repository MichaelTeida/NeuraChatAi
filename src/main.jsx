import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {CssBaseline, CssVarsProvider} from "@mui/joy";
import theme from "./theme/theme.jsx";
import Features from "./pages/Features.jsx";
import Instruction from "./pages/Instruction.jsx";


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
            },
            {
                path: "/NeuraChatAi/instruction",
                element: <Instruction/>,
            },
            {
                path: "/NeuraChatAi/features",
                element: <Features/>,
            }
        ]
    }
]

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <CssVarsProvider theme={theme} disableTransitionOnChange>
        <CssBaseline/>
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>
    </CssVarsProvider>
)

import './styles/App.scss'
import {Outlet} from "react-router-dom";
import {Sheet} from "@mui/joy";
import {ActionsProvider} from "./contexts/ActionsContext.jsx";

function App() {

    return (
        <>
            <ActionsProvider>
                <Sheet component="main" className="MainContent">
                    <Outlet/>
                </Sheet>
            </ActionsProvider>
        </>
    )
}

export default App

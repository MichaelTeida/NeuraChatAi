import './styles/App.scss'
import {Outlet} from "react-router-dom";
import {Sheet} from "@mui/joy";

function App() {

    return (
        <>
            <Sheet component="main" className="MainContent">
                <Outlet/>
            </Sheet>
        </>
    )
}

export default App

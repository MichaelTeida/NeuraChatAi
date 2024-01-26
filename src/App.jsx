import './styles/App.scss'
import {Outlet} from "react-router-dom";
import {Sheet} from "@mui/joy";
import Header from "./components/Header.jsx";

function App() {

    return (
        <>
            <Header/>
            <Sheet component="main" className="MainContent">
                <Outlet/>
            </Sheet>
        </>
    )
}

export default App

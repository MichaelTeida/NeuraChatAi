import './styles/App.scss'
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/joy";
import Header from "./components/Header.jsx";

function App() {

    return (
        <>
            <Header />
                <Box component="main" className="MainContent">
                    <Outlet/>
                </Box>
        </>
    )
}

export default App

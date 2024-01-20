import './styles/App.scss'
import {Outlet} from "react-router-dom";
import {Box, Container} from "@mui/joy";
import Header from "./components/Header.jsx";

function App() {

    return (
        <>
            <Header />
            <Container sx={{ display: 'flex' }}>
                <Box component="main" className="MainContent" sx={{ flex: 1, flexDirection: {xs: "column", sm: "row"}}}>
                    <Outlet/>
                </Box>
            </Container>
        </>
    )
}

export default App

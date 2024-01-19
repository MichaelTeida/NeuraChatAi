import './styles/App.scss'
import {Link as RouterLink, Outlet} from "react-router-dom";
import {Container, Typography} from "@mui/joy";

function App() {

    return (
        <Container sx={{ minHeight: '100dvh' }}>
            <Typography>Hello there ;)</Typography>
            <nav>
                <RouterLink to="/NeuraChatAi/">Homepage</RouterLink>
                <RouterLink to="/NeuraChatAi/about">About</RouterLink>
            </nav>
            <Outlet/>
        </Container>
    )
}

export default App

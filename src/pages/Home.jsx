import Chat from "../components/Chat.jsx";
import {Box, Container} from "@mui/joy";
import Sidebar from "../components/Sidebar.jsx";

export function Home() {
    return (
        <Box sx={{display: 'flex', height: 'calc(100dvh - var(--Header-height))', justifyContent: 'space-between'}}>
            <Sidebar />
            <Container>
                <Chat />
            </Container>
        </Box>
    );
}

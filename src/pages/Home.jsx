import Chat from "../components/Chat.jsx";
import {Box, Container} from "@mui/joy";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import {useState} from "react";

export function Home() {
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <>
            <Header setOpenSettings={setOpenSettings} />
            <Box sx={{display: 'flex', height: 'calc(100dvh - var(--Header-height))', justifyContent: 'space-between'}}>
                <Sidebar openSettings={openSettings} setOpenSettings={setOpenSettings}/>
                <Container>
                    <Chat />
                </Container>
            </Box>
        </>
    );
}

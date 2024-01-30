import Chat from "../components/Chat.jsx";
import {Box, Container} from "@mui/joy";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import {useState} from "react";

export function Home() {
    const [openSettingss] = useState();

    return (
        <>
            <Header openSettings={openSettingss} />
            <Box sx={{display: 'flex', height: 'calc(100dvh - var(--Header-height))', justifyContent: 'space-between'}}>
                <Sidebar openSettings={openSettingss}/>
                <Container>
                    <Chat />
                </Container>
            </Box>
        </>
    );
}

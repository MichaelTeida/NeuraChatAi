import {Box, GlobalStyles, Sheet, Stack, Typography} from "@mui/joy";
import {Link as RouterLink} from "react-router-dom";
import logoNeuraChatAi from "../assets/logo NeuraChatAi.png"
import logoNeuraChatAiWhite from "../assets/logo NeuraChatAi white.png"
import ModeToggle from "./ModeToggle.jsx";
import {useEffect, useState} from "react";
import { useColorScheme } from '@mui/joy/styles';

function Header() {
    const {mode} = useColorScheme();
    const [logoHeader, setLogoHeader] = useState(mode)

    useEffect(() => {
        mode === 'light' ? setLogoHeader(logoNeuraChatAi) : setLogoHeader(logoNeuraChatAiWhite)
    },[mode])

    return (
        <Sheet component="header"
               sx={{
                   display: 'flex',
                   p: 2,
                   flexGrow: 1,
                   maxWidth: 1,
                   justifyContent: "space-between",
                   height: 'var(--Header-height)',
                   borderBottom: '1px solid', borderColor: 'divider'
               }}>
            <GlobalStyles
                styles={(theme) => ({
                    ':root': {
                        '--Header-height': '52px',
                        [theme.breakpoints.up('sm')]: {
                            '--Header-height': '70px',
                        },
                    },
                })}
            />
            <Stack direction="row"
                   justifyContent="center"
                   alignItems="center"
                   spacing={2}>
                <Box component="img" src={logoHeader} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 100, md: 100},
                }}/>
                <RouterLink to="/NeuraChatAi/"><Typography>Homepage</Typography></RouterLink>
                <RouterLink to="/NeuraChatAi/about"><Typography>About</Typography></RouterLink>
            </Stack>
            <Stack direction="row"
                   justifyContent="center"
                   alignItems="center"
                   spacing={1}>

            </Stack>
            <ModeToggle />
        </Sheet>
    )
}

export default Header
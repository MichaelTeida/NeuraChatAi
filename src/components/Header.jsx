import {
    Box,
    Drawer,
    GlobalStyles,
    IconButton,
    List,
    ListItemButton,
    ModalClose,
    Sheet,
    Stack,
    Typography
} from "@mui/joy";
import {Link as RouterLink} from "react-router-dom";
import logoNeuraChatAi from "../assets/logo NeuraChatAi.png"
import logoNeuraChatAiWhite from "../assets/logo NeuraChatAi white.png"
import ModeToggle from "./ModeToggle.jsx";
import {useEffect, useState} from "react";
import {useColorScheme} from '@mui/joy/styles';
import Menu from '@mui/icons-material/Menu';
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';

function Header() {
    const {mode} = useColorScheme();
    const [logoHeader, setLogoHeader] = useState(mode)
    const [menuNav, setMenuNav] = useState(false)

    useEffect(() => {
        mode === 'light' ? setLogoHeader(logoNeuraChatAi) : setLogoHeader(logoNeuraChatAiWhite)
    }, [mode])

    const openMenu = (event) => {
        setMenuNav(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setMenuNav(false)
    }

    return (
        <Sheet component="header"
               sx={{
                   display: 'flex',
                   p: 2,
                   flexGrow: 1,
                   maxWidth: 1,
                   justifyContent: "space-between",
                   height: 'var(--Header-height)',
                   borderBottom: '1px solid', borderColor: 'divider',
                   gap: 2
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
                   justifyContent="flex-start"
                   alignItems="center"
                   spacing={2}
                   flex={1}>
                <Box component="img" src={logoHeader} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 100, md: 100},
                }}/>
                <Stack direction="row"
                       spacing={2}
                       sx={{display: {xs: "none", md: "flex"}}}>
                    <RouterLink to="/NeuraChatAi/"><Typography>Homepage</Typography></RouterLink>
                    <RouterLink to="/NeuraChatAi/about"><Typography>About</Typography></RouterLink>
                </Stack>
            </Stack>
            <Stack direction="row"
                   justifyContent="center"
                   alignItems="center"
                   spacing={1}
                   sx={{display: {xs: "none", md: "flex"}}}>
            </Stack>
            <ModeToggle/>
            <IconButton variant="outlined" color="neutral" onClick={openMenu} sx={{display: {xs: "flex", md: "none"}}}>
                <Menu/>
            </IconButton>
            <Drawer open={menuNav} onClose={() => handleCloseMenu(false)}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        ml: 'auto',
                        mt: 1,
                        mr: 2,
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        fontSize="sm"
                        fontWeight="lg"
                        sx={{cursor: 'pointer'}}
                    >
                        Close
                    </Typography>
                    <ModalClose id="close-icon" sx={{position: 'initial'}}/>
                </Box>
                <List spacing={2}
                      sx={{display: {xs: "flex", md: "none"}}}>
                    <RouterLink to="/NeuraChatAi/"><ListItemButton
                        sx={{justifyContent: "center"}}><Typography>Homepage</Typography></ListItemButton></RouterLink>
                    <RouterLink to="/NeuraChatAi/about"><ListItemButton
                        sx={{justifyContent: "center"}}><Typography>About</Typography></ListItemButton></RouterLink>
                </List>
            </Drawer>
        </Sheet>
    )
}

export default Header
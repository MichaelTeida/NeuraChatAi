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
import SettingsIcon from '@mui/icons-material/Settings';

const Header = ({setOpenSettings}) => {
    const {mode} = useColorScheme();
    const [logoHeader, setLogoHeader] = useState(mode)
    const [menuNav, setMenuNav] = useState(false)

    useEffect(() => {
        mode === 'light' ? setLogoHeader(logoNeuraChatAi) : setLogoHeader(logoNeuraChatAiWhite)
    }, [mode])

    const openMenu = () => {
        setMenuNav(true)
    }

    const handleOpenSettings = () => {
        setOpenSettings(prevState => !prevState);
    }

    const handleCloseMenu = () => {
        setMenuNav(false)
    }


    return (
        <Sheet component="header"
               sx={{
                   zIndex: "3",
                   display: 'flex',
                   p: 2,
                   flexGrow: 1,
                   maxWidth: 1,
                   justifyContent: "space-between",
                   alignItems: "center",
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
                <RouterLink to="/NeuraChatAi/">
                <Box component="img" src={logoHeader} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 100, md: 100},
                }}/>
                </RouterLink>
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
                <Input
                    size="sm"
                    placeholder="Search"
                    variant="plain"
                    endDecorator={<Search/>}
                    slotProps={{
                        input: {
                            'aria-label': 'Search anything',
                        },
                    }}
                    sx={{
                        m: 3,
                        mb: 2,
                        borderRadius: 0,
                        borderBottom: '2px solid',
                        borderColor: 'neutral.outlinedBorder',
                        '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                        },
                        '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                        },
                        '&:focus-within::before': {
                            transform: 'scaleX(1)',
                        },
                    }}
                />
            </Stack>
            <ModeToggle/>
            <IconButton variant="outlined" color="neutral" onClick={handleOpenSettings} sx={{display: {xs: "flex", md: "none"}}}>
                <SettingsIcon/>
            </IconButton>
            <IconButton variant="outlined" color="neutral" onClick={openMenu} sx={{display: {xs: "flex", md: "none"}}}>
                <Menu/>
            </IconButton>
            <Drawer open={menuNav} onClose={handleCloseMenu}>
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
                        sx={{cursor: 'pointer', pb: 0.3}}
                    >
                        Close
                    </Typography>
                    <ModalClose id="close-icon" sx={{position: 'initial'}}/>
                </Box>
                <Input
                    size="sm"
                    placeholder="Search"
                    variant="plain"
                    endDecorator={<Search/>}
                    slotProps={{
                        input: {
                            'aria-label': 'Search anything',
                        },
                    }}
                    sx={{
                        m: 3,
                        mb: 2,
                        borderRadius: 0,
                        borderBottom: '2px solid',
                        borderColor: 'neutral.outlinedBorder',
                        '&:hover': {
                            borderColor: 'neutral.outlinedHoverBorder',
                        },
                        '&::before': {
                            border: '1px solid var(--Input-focusedHighlight)',
                            transform: 'scaleX(0)',
                            left: 0,
                            right: 0,
                            bottom: '-2px',
                            top: 'unset',
                            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
                            borderRadius: 0,
                        },
                        '&:focus-within::before': {
                            transform: 'scaleX(1)',
                        },
                    }}
                />
                <List spacing={2}
                      sx={{display: {xs: "flex", md: "none"}}}>
                    <RouterLink to="/NeuraChatAi/">
                        <ListItemButton sx={{justifyContent: "center"}}><Typography>Homepage</Typography>
                        </ListItemButton>
                    </RouterLink>
                    <RouterLink to="/NeuraChatAi/about">
                        <ListItemButton sx={{justifyContent: "center"}}><Typography>About</Typography>
                        </ListItemButton>
                    </RouterLink>
                </List>
            </Drawer>
        </Sheet>
    )
}

export default Header

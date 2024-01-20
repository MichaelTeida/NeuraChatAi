import {Box, GlobalStyles, Sheet, Stack} from "@mui/joy";
import {Link as RouterLink} from "react-router-dom";
import logoNeuraChatAi from "../assets/logo NeuraChatAi.png"

function Header() {
    return (
        <Sheet component="header"
               sx={{
                   display: 'flex',
                   p: 2,
                   flexGrow: 1,
                   maxWidth: 1,
                   justifyContent: "space-between",
                   height: 'var(--Header-height)'
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
                <Box component="img" src={logoNeuraChatAi} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 100, md: 100},
                }}/>
                <RouterLink to="/NeuraChatAi/">Homepage</RouterLink>
                <RouterLink to="/NeuraChatAi/about">About</RouterLink>
            </Stack>
            <Stack direction="row"
                   justifyContent="center"
                   alignItems="center"
                   spacing={1}>

            </Stack>
        </Sheet>
    )
}

export default Header
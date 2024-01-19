import {Sheet, Stack, Typography} from "@mui/joy";
import {Link as RouterLink} from "react-router-dom";

function Header () {
    return (
    <Sheet component="header" stickyHeader
        sx={{
        display: 'flex',
        p: 2,
        flexGrow: 1,
            maxWidth: 1,
        justifyContent: "space-between",
        background: "secondary",
    }}>
        <Stack direction="row"
               justifyContent="center"
               alignItems="center"
               spacing={2}>
            <Typography>NeuraChatAi</Typography>
            <RouterLink to="/NeuraChatAi/">Homepage</RouterLink>
            <RouterLink to="/NeuraChatAi/about">About</RouterLink>
        </Stack>
        <Stack  direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}>

        </Stack>
    </Sheet>
    )
}

export default Header
import {Box, Card, Sheet, Stack, Typography} from "@mui/joy";

function Output() {
    return (
        <Card sx={{
            display: 'flex',
            flex: 1,
            minHeight: 0,
            overflowY: 'scroll',
            flexDirection: 'column-reverse',
        }}>
            <Box sx={{maxWidth: {xs: 'auto', sm: "60%"}, minWidth: 'auto'}}>
                <Stack direction="row" justifyContent="space-beteween" spacing={2}>
                    <Typography level="body-xs">
                        NeuraChat
                    </Typography>
                    <Typography level="body-xs">
                        Timestamp
                    </Typography>
                </Stack>
                <Sheet variant="outlined" sx={{p: 1, borderRadius: "sm", backgroundColor: "background.level1"}}>
                    <Typography component="p" fontSize={{xs: "sm", sm: "md"}} sx={{ wordBreak: "break-word" }}>
                        Messageeeeeeee
                    </Typography>
                </Sheet>
            </Box>
            <Box sx={{maxWidth: {xs: 'auto', sm: "60%"}, minWidth: 'auto'}}>
                <Stack direction="row" justifyContent="space-beteween" spacing={2}>
                    <Typography level="body-xs">
                        User
                    </Typography>
                    <Typography level="body-xs">
                        Timestamp
                    </Typography>
                </Stack>
                <Sheet variant="outlined" sx={{p: 1, borderRadius: "sm", backgroundColor: "background.level1"}}>
                    <Typography component="p" fontSize={{xs: "sm", sm: "md"}} sx={{ wordBreak: "break-word" }}>
                        MessageeeeeeeeMessageeeeeeeeMessageeeeeeeeMessageeeeeeee
                    </Typography>
                </Sheet>
            </Box>
        </Card>
    )
}

export default Output
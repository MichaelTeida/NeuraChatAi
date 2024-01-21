import {Box, Button, Card, CardContent, Input as JoyInput, Sheet, Stack, Typography} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit.js";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward.js";
import {useState} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";

function Chat() {

    const [input, setInput] = useState("")

    const handleSend = async () => {
        const respone = await sendMessage(input)
        console.log(respone)
    }

    return (
        <Stack spacing={2} sx={{maxHeight: 'calc(100dvh - var(--Header-height))', py: 2}} >
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
                        <Typography component="p" fontSize={{xs: "sm", sm: "md"}} sx={{wordBreak: "break-word"}}>
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
                        <Typography component="p" fontSize={{xs: "sm", sm: "md"}} sx={{wordBreak: "break-word"}}>
                            Messageeeeeeee
                        </Typography>
                    </Sheet>
                </Box>
            </Card>
            <Card >
                <CardContent sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                    <JoyInput
                        startDecorator={<EditIcon/>}
                        placeholder="Type something here…"
                        sx={{"--Input-minHeight": "48px", flexGrow: 1}}
                        value={input}
                        onChange={(e)=>{setInput(e.target.value)}}
                    />
                    <Button onClick={handleSend}><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default Chat
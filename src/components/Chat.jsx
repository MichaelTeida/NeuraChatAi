import {Box, Button, Card, CardContent, Input as JoyInput, Sheet, Stack, Typography} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useState} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";

function Chat() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [messages, setMessages] = useState([{
        isHuman: false,
        content: "Example text from NeuraChat"
    }])

    useEffect(() => {
        if (output) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {isHuman: false, content: output}
            ]);
        }
    }, [output])

    const handleSend = async () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {isHuman: true, content: input}
        ]);
        setOutput(await sendMessage(input))
        setInput("")
    }

    return (
        <Stack spacing={2} sx={{height: 'calc(100dvh - var(--Header-height))', py: 2}}>
            <Card sx={{
                flex: 1,
                minHeight: 0,
                overflowY: 'scroll',
                flexDirection: 'column',
            }}>
                {messages.map((el, index) => {
                    return (
                        <Box key={index} sx={{maxWidth: {xs: 'auto', sm: "60%"}, minWidth: 'auto'}}>
                            <Stack direction="row" justifyContent="space-beteween" spacing={2}>
                                <Typography level="body-xs">
                                    {el.isHuman ? "You" : "NeuraChat"}
                                </Typography>
                                <Typography level="body-xs">
                                    Timestamp
                                </Typography>
                            </Stack>
                            <Sheet variant="outlined" sx={{p: 1, borderRadius: "sm", backgroundColor: "background.level1"}}>
                                <Typography component="p" fontSize={{xs: "sm", sm: "md"}} sx={{wordBreak: "break-word"}}>
                                    {el.content}
                                </Typography>
                            </Sheet>
                        </Box>
                    )
                })}
            </Card>
            <Card>
                <CardContent sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                    <JoyInput
                        startDecorator={<EditIcon/>}
                        placeholder="Type something here…"
                        sx={{"--Input-minHeight": "48px", flexGrow: 1}}
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                    <Button onClick={handleSend}><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default Chat
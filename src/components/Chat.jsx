import {Box, Button, Card, CardContent, FormControl, Input as JoyInput, Sheet, Stack, Typography} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useState, useRef} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";

function Chat() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [messages, setMessages] = useState([{
        isHuman: false,
        content: "Example text from NeuraChat",
        timestamp: new Date(Date.now())
    }])

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (output) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {isHuman: false, content: output, timestamp: new Date(Date.now())}
            ]);
        }
    }, [output])

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSend = async () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {isHuman: true, content: input, timestamp: new Date(Date.now())}
        ]);
        setInput("")
        setOutput(await sendMessage(input))
    }

    const handleClick = async (event) => {
        if(event.key === 'Enter') {
            event.preventDefault()
            await handleSend()
        }
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
                            <Stack direction="row" justifyContent="space-between" spacing={2}>
                                <Typography level="body-xs">
                                    {el.isHuman ? "You" : "NeuraChat"}
                                </Typography>
                                <Typography level="body-xs">
                                    {el.timestamp.getHours()}:{el.timestamp.getMinutes()}:{el.timestamp.getSeconds()}
                                </Typography>
                            </Stack>
                            <Sheet variant="outlined"
                                   sx={{p: 1, borderRadius: "sm", backgroundColor: "background.level1"}}>
                                <Typography component="p" fontSize={{xs: "sm", sm: "md"}}
                                            sx={{wordBreak: "break-word"}}>
                                    {el.content}
                                </Typography>
                            </Sheet>
                        </Box>
                    )
                })}
                <Box ref={messagesEndRef}/>
            </Card>
            <Card>
                <FormControl sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 2}}>
                    <JoyInput
                        startDecorator={<EditIcon/>}
                        placeholder="Type something here…"
                        sx={{"--Input-minHeight": "48px", flexGrow: 1}}
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                        onKeyDown={handleClick}
                    />
                    <Button type="submit" onClick={handleSend}><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
                </FormControl>
            </Card>
        </Stack>
    )
}

export default Chat
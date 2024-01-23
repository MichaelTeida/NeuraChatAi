import {Box, Button, Card, FormControl, Input as JoyInput, Sheet, Stack, Typography, Avatar} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useState, useRef} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";
import NeuraChatLogoSquare from "../assets/logo NeuraChatAi 100x100.png"
import CopyToClipboardBtn from "../components/CopyToClipbaordBtn.jsx"

function Chat() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [messages, setMessages] = useState([{
        isHuman: false,
        content: "Hello, how can I help you?",
        timestamp: new Date(Date.now())
    }])
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
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
        if (event.key === 'Enter') {
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
                backgroundColor: 'background.level1'
            }}>
                {messages.map((el, index) => {
                    return (
                        <Box key={index} display="flex" alignItems="flex-start">
                            {el.isHuman ? null : <Avatar alt="NeuraChat Avatar" src={NeuraChatLogoSquare} sx={{marginRight: 1, mt: 0.4}}/>}
                            <Stack display="flex" direction="row" flexDirection={el.isHuman ? 'row-reverse' : 'row'} width="100%"
                                   onMouseEnter={() => (el.isHuman ? null : setHoveredIndex(index))}
                                   onMouseLeave={() => (el.isHuman ? null : setHoveredIndex(null))}>
                                <Box sx={{width: {xs: 'auto', sm: "60%"}, minWidth: '60%'}}>
                                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                                        <Typography level="body-xs">
                                            {el.isHuman ? "You" : "NeuraChat"}
                                        </Typography>
                                        <Typography level="body-xs">
                                            {el.timestamp.getHours()}:{el.timestamp.getMinutes()}:{el.timestamp.getSeconds()}
                                        </Typography>
                                    </Stack>
                                    <Sheet variant="outlined"
                                           sx={{
                                               p: 1,
                                               borderRadius: "sm",
                                               backgroundColor: el.isHuman ? "primary.500" : "primary.50",
                                               "&:hover": {filter: "brightness(97%)"}
                                           }}>
                                        <Typography component="p" className="selectMessageContent" fontSize={{xs: "sm", sm: "md"}}
                                                    sx={{
                                                        color: el.isHuman ? "neutral.50" : "text.primary",
                                                        wordBreak: "break-word"
                                                    }}>
                                            {el.content}
                                        </Typography>
                                    </Sheet>
                                </Box>
                                {(el.isHuman || hoveredIndex !== index) ? null : <CopyToClipboardBtn content={el.content}/>}
                            </Stack>
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
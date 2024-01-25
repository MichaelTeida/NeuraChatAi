import {Box, Button, Card, FormControl, Input as JoyInput, Sheet, Stack, Typography, Avatar, Snackbar} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useState, useRef} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";
import NeuraChatLogoSquare from "../assets/logo NeuraChatAi 100x100.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn.jsx"
import InfoIcon from "@mui/icons-material/Info";
import dayjs from "dayjs";
import calendar from 'dayjs/plugin/calendar';

function Chat() {
    dayjs.extend(calendar);

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [messages, setMessages] = useState([{
        isHuman: false,
        content: "Hello, how can I help you?",
        timestamp: dayjs().calendar().toString(),
    }])
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (output) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {isHuman: false, content: output, timestamp: dayjs().calendar().toString(),}
            ]);
        }
    }, [output])

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const handleSend = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {isHuman: true, content: input, timestamp: dayjs().calendar().toString(),}
        ]);
        setInput("")
        sendMessage(input).then((response) => {
            setOutput(response)
        })
    }


    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true)
    }
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    return (
        <Stack flex={8} spacing={2} sx={{height: 'calc(100dvh - var(--Header-height))', py: 2}}>
            <Card sx={{
                flex: 1,
                minHeight: 0,
                overflowY: 'scroll',
                backgroundColor: 'primary.50',
                pl: {xs: 1, md: 2}
            }}>
                {messages.map((el, index) => {
                    return (
                        <Box key={index} display="flex" alignItems="flex-start">
                            {el.isHuman ? null : <Avatar alt="NeuraChat Avatar" src={NeuraChatLogoSquare} sx={{marginRight: {xs: 0.5, md: 1} , mt: 0.4, pl: 0}}/>}
                            <Stack display="flex" direction="row" flexDirection={el.isHuman ? 'row-reverse' : 'row'} width="100%"
                                   onMouseEnter={() => (el.isHuman ? null : setHoveredIndex(index))}
                                   onMouseLeave={() => (el.isHuman ? null : setHoveredIndex(null))}>
                                <Box sx={{width: {xs: 'auto', sm: "60%"}, minWidth: '60%'}}>
                                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                                        <Typography level="body-xs">
                                            {el.isHuman ? "You" : "NeuraChat"}
                                        </Typography>
                                        <Typography level="body-xs">
                                            {el.timestamp}
                                        </Typography>
                                    </Stack>
                                    <Sheet variant="outlined"
                                           sx={{
                                               p: 1,
                                               borderRadius: "lg",
                                               borderTopRightRadius: el.isHuman ? 0 : "lg",
                                               borderTopLeftRadius: el.isHuman ? "lg" : 0,
                                               backgroundColor: el.isHuman ? "primary.500" : "background.body",
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
                                {(el.isHuman || hoveredIndex !== index) ? null : <CopyToClipboardBtn content={el.content} handleOpenSnackbar={handleOpenSnackbar}/>}
                                <Snackbar open={openSnackbar} onClose={handleCloseSnackbar} autoHideDuration={2000} variant="outlined" anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                    <InfoIcon/> Text copied to clipboard
                                </Snackbar>
                            </Stack>
                        </Box>
                    )
                })}
                <Box ref={messagesEndRef}/>
            </Card>
            <Card sx={{backgroundColor: 'background.level'}}>
                {/*<form onSubmit={handleSend}>*/}
                <form onSubmit={(event) => {
                    event.preventDefault()
                    handleSend()
                }}>
                    <FormControl required sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 2}}>
                        <JoyInput
                            startDecorator={<EditIcon/>}
                            placeholder="Type something here…"
                            sx={{"--Input-minHeight": "48px", flexGrow: 1}}
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                        />
                        <Button type="submit"><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
                    </FormControl>
                </form>
            </Card>
        </Stack>
    )
}
export default Chat
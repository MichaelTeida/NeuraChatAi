import {
    Box,
    Button,
    Card,
    FormControl,
    Input as JoyInput,
    Sheet,
    Stack,
    Typography,
    Avatar,
    Tooltip,
    CardContent
} from "@mui/joy";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {useEffect, useState, useRef, useContext} from "react";
import {SendMessage} from "../lib/OpenAi.jsx";
import NeuraChatLogoSquare from "../assets/logo NeuraChatAi 100x100.png"
import CopyToClipboardBtn from "../components/CopyToClipboardBtn.jsx"
import dayjs from "dayjs";
import calendar from 'dayjs/plugin/calendar';
import {SnackBar} from "./SnackBar.jsx";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import {ActionsContext} from "../contexts/ActionsContext.jsx";

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
    const [formDisabled, setFormDisabled] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const {DecreaseAvailableActions} = useContext(ActionsContext);
    const {IncreaseAvailableActions} = useContext(ActionsContext)
    const {IncreaseImmediatelyAvailableActions} = useContext(ActionsContext)

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
        if (messages.length >= 2) {
            setTooltipVisible(false)
        }
    }, [messages])

    const handleSend = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {isHuman: true, content: input, timestamp: dayjs().calendar().toString(),}
        ]);
        setInput("")
        DecreaseAvailableActions()
        SendMessage(input, (errorMessage) => {
            setMessageSnackbar(errorMessage);
        }, messages).then(async (response) => {
            IncreaseAvailableActions()
            setOutput(response)
        }).catch(() => {
            IncreaseImmediatelyAvailableActions()
        })
    }

    const handleTip = (tip) => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
                isHuman: true,
                content: tip,
                timestamp: dayjs().calendar().toString(),
            }
        ]);
        setInput("")
        DecreaseAvailableActions()
        SendMessage(tip, (errorMessage) => {
            setMessageSnackbar(errorMessage);
        }, messages).then(async (response) => {
            IncreaseAvailableActions()
            setOutput(response)
        }).catch(() => {
            IncreaseImmediatelyAvailableActions()
        })
    }

    const [messageSnackbar, setMessageSnackbar] = useState("");

    const handleSnackbarMessage = (message) => {
        setMessageSnackbar(message)
    }

    return (
        <Stack flex={8} spacing={2} sx={{height: 'calc(100dvh - var(--Header-height))', py: 2}}>
            <Card sx={{
                flex: 1,
                minHeight: 0,
                overflowY: 'scroll',
                backgroundColor: 'background.level1',
                pl: {xs: 2, md: 2},
                justifyContent: "space-between",
                gap: 0,
            }}>
                <Stack display="flex" height="100%">
                    <Stack spacing={1.5} sx={{flex: 1, pb: 2}}>
                        {messages.map((el, index) => {
                            return (
                                <Box key={index} display="flex" alignItems="flex-start">
                                    {el.isHuman ? null : <Avatar alt="NeuraChat Avatar" src={NeuraChatLogoSquare}
                                                                 sx={{marginRight: {xs: 0.5, md: 1}, mt: 0.4, pl: 0}}/>}
                                    <Stack display="flex" direction="row"
                                           flexDirection={el.isHuman ? 'row-reverse' : 'row'}
                                           width="100%"
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
                                                       p: 1.2,
                                                       px: {md: 1.5},
                                                       borderRadius: "lg",
                                                       borderTopRightRadius: el.isHuman ? 0 : "lg",
                                                       borderTopLeftRadius: el.isHuman ? "lg" : 0,
                                                       backgroundColor: el.isHuman ? "primary.500" : "background.body",
                                                       "&:hover": {filter: "brightness(97%)"}
                                                   }}>
                                                <Typography component="p" className="selectMessageContent"
                                                            fontSize={{xs: "sm", sm: "md"}}
                                                            sx={{
                                                                color: el.isHuman ? "neutral.50" : "text.primary",
                                                                wordBreak: "break-word",
                                                                whiteSpace: "pre-wrap"
                                                            }}>
                                                    {el.content}
                                                </Typography>
                                            </Sheet>
                                        </Box>
                                        {(el.isHuman || hoveredIndex !== index) ? null :
                                            <CopyToClipboardBtn content={el.content}
                                                                snackbarMessage={handleSnackbarMessage}/>}
                                    </Stack>
                                </Box>
                            )
                        })}
                    </Stack>
                    {tooltipVisible && <Stack direction={{xs: "column", md: "row"}} spacing={2} justifyContent="center">
                        <Tooltip title="Click to get answer" arrow placement="top">
                            <Card color="primary" variant="outlined" sx={{
                                flex: 1,
                                p: {xs: 1, md: 2},
                                "&:hover": {cursor: "pointer", filter: "brightness(97%)"}
                            }}
                                  onClick={() => handleTip("Brainstorm ideas for a unique and memorable marriage proposal")}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography level="title-sm">Brainstorm ideas</Typography>
                                        <AdsClickIcon fontSize="lg"/>
                                    </Stack>
                                    <Typography level="body-sm">for a unique and memorable marriage
                                        proposal</Typography>
                                </CardContent>
                            </Card>
                        </Tooltip>
                        <Tooltip title="Click to get answer" arrow placement="top">
                            <Card color="primary" variant="outlined" sx={{
                                flex: 1,
                                p: {xs: 1, md: 2},
                                "&:hover": {cursor: "pointer", filter: "brightness(97%)"}
                            }}
                                  onClick={() => handleTip("Suggest ways to improve productivity while working from home")}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography level="title-sm">Suggest ways</Typography>
                                        <AdsClickIcon fontSize="lg"/>
                                    </Stack>
                                    <Typography level="body-sm">to improve productivity while working from
                                        home</Typography>
                                </CardContent>
                            </Card>
                        </Tooltip>
                        <Tooltip title="Click to get answer" arrow placement="top">
                            <Card color="primary" variant="outlined" sx={{
                                flex: 1,
                                p: {xs: 1, md: 2},
                                "&:hover": {cursor: "pointer", filter: "brightness(97%)"}
                            }}
                                  onClick={() => handleTip("Recommend books for a book club focused on fantasy genres")}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography level="title-sm">Recommend books</Typography>
                                        <AdsClickIcon fontSize="lg"/>
                                    </Stack>
                                    <Typography level="body-sm">for a book club focused on fantasy genres</Typography>
                                </CardContent>
                            </Card>
                        </Tooltip>
                    </Stack>}
                    <Box ref={messagesEndRef}/>
                </Stack>
            </Card>
            <Card sx={{backgroundColor: 'background.level'}}>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    if (event.currentTarget.elements.text.value.length > 3000) {
                        setMessageSnackbar("Warning: maximum character count: 3000")
                    } else {
                        handleSend()
                        setFormDisabled(true)
                        setTimeout(() => {
                            setFormDisabled(false)
                        }, 2000)
                    }
                }}>
                    <FormControl required sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, gap: 2}}>
                        <JoyInput
                            name="text"
                            startDecorator={<EditIcon/>}
                            placeholder="Type something here…"
                            sx={{"--Input-minHeight": "48px", flexGrow: 1}}
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value)
                            }}
                        />
                        <Button id="sendBtn" disabled={formDisabled} type="submit"><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
                    </FormControl>
                </form>
            </Card>
            <SnackBar message={messageSnackbar} closeSnackBar={setMessageSnackbar}/>
        </Stack>
    )
}

export default Chat
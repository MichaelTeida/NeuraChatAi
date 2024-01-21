import {Button, Card, CardContent, Input as JoyInput} from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {useState} from "react";
import {sendMessage} from "../lib/OpenAi.jsx";

function Input() {
    const [input, setInput] = useState("")

    const handleSend = async () => {
        const response = await sendMessage(input)
        console.log(input)
        console.log(response)
    }

    return (
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
    )
}

export default Input
import {Button, Card, CardContent, Input as JoyInput} from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Input() {
    return (
        <Card>
            <CardContent>
                <JoyInput
                    startDecorator={<EditIcon/>}
                    endDecorator={<Button><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>}
                    placeholder="Type something here…"
                    sx={{
                        "--Input-minHeight": "48px",
                        "--Input-decoratorChildHeight": "48px",
                    }}/>
            </CardContent>
        </Card>
    )
}

export default Input
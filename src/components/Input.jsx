import {Button, Card, CardActions, CardContent, Input as JoyInput} from "@mui/joy";
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Input() {
    return (
        <Card >
            <CardContent sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}}}>
                <JoyInput
                    startDecorator={<EditIcon/>}
                    placeholder="Type something here…"
                    sx={{"--Input-minHeight": "48px", flexGrow: 1}}/>
                <Button><ArrowUpwardIcon sx={{mx: "3px"}}/>Send</Button>
            </CardContent>
        </Card>
    )
}

export default Input
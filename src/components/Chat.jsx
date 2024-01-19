import Output from "./Output.jsx";
import Input from "./Input.jsx";
import {Stack} from "@mui/joy";

function Chat () {
    return (
        <Stack spacing={2}>
                <Output/>
                <Input/>
        </Stack>
    )
}

export default Chat
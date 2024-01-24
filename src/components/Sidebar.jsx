import {Divider, Select, Sheet, Slider, Typography, Option, Box} from "@mui/joy";
import {useState} from "react";

const Sidebar = () => {

    const [temperature, settemperature] = useState(0.7);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0.01);
    const [maxTokens, setMaxTokens] = useState(500);
    const [topG, setTopG] = useState(1);
    const [model, setModel] = useState('gpt-3.5-turbo');

    return <Sheet sx={{borderRight: '1px solid', borderColor: 'divider', overflowY: 'scroll', width: "25rem", p: 3}}>
        {/*<Typography >Ustawienia:</Typography>*/}
        <Divider variant="soft" color="neutral" sx={{mb: 2}}>Settings</Divider>

        <Box sx={{my: 2, mb: 3}}>
            <Typography level="title-sm">Model:</Typography>
            <Select defaultValue={model} size="sm" onChange={(event, value) => setModel(value)}>
                <Option value="gpt-3.5-turbo">gpt-3.5-turbo</Option>
                <Option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</Option>
                <Option value="gpt-3.5-turbo-0613">gpt-3.5-turbo-0613</Option>
                <Option value="gpt-3.5-turbo-1106">gpt-3.5-turbo-1106</Option>
                <Option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</Option>
                <Option value="gpt-3.5-turbo-16k-0613">gpt-3.5-turbo-16k-0613</Option>
            </Select>
        </Box>

        <Box sx={{my: 1}}>
            <Typography level="title-sm">Temperature: {temperature}</Typography>
            <Slider
                value={temperature}
                onChange={(event, value) => settemperature(value)}
                size="sm"
                variant="solid"
                defaultValue={temperature}
                step={0.1}
                min={0}
                max={1}
                valueLabelDisplay="auto"
                sx={{
                    "--Slider-thumbWidth": "10px",
                    "--Slider-thumbSize": "20px"
                }}
            />
        </Box>

        <Box sx={{my: 1}}>
            <Typography level="title-sm">Frequency Penalty: {frequencyPenalty}</Typography>
            <Slider
                value={frequencyPenalty}
                onChange={(event, value) => setFrequencyPenalty(value)}
                size="sm"
                variant="solid"
                defaultValue={frequencyPenalty}
                step={0.01}
                min={-2}
                max={2}
                valueLabelDisplay="auto"
                sx={{
                    "--Slider-thumbWidth": "10px",
                    "--Slider-thumbSize": "20px"
                }}
            />
        </Box>

        <Box sx={{my: 1}}>
            <Typography level="title-sm">Max tokens: {maxTokens}</Typography>
            <Slider
                value={maxTokens}
                onChange={(event, value) => setMaxTokens(value)}
                size="sm"
                variant="solid"
                defaultValue={maxTokens}
                step={1}
                min={0}
                max={5000}
                valueLabelDisplay="auto"
                sx={{
                    "--Slider-thumbWidth": "10px",
                    "--Slider-thumbSize": "20px"
                }}
            />
        </Box>

        <Box sx={{my: 1}}>
            <Typography level="title-sm">Top_p: {topG}</Typography>
            <Slider
                value={topG}
                onChange={(event, value) => setTopG(value)}
                size="sm"
                variant="solid"
                defaultValue={topG}
                step={0.05}
                min={0}
                max={1}
                valueLabelDisplay="auto"
                sx={{
                    "--Slider-thumbWidth": "10px",
                    "--Slider-thumbSize": "20px"
                }}
            />
        </Box>
    </Sheet>
}

export default Sidebar
import {Divider, Select, Sheet, Slider, Typography, Option, Box, Chip} from "@mui/joy";
import {useEffect, useState} from "react";
import {setOpenAiParams} from "../lib/OpenAi.jsx";

const Sidebar = () => {
    const [model, setModel] = useState('gpt-3.5-turbo');
    const [temperature, setTemperature] = useState(0.7);
    const [maxTokens, setMaxTokens] = useState(500);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0.01);
    const [topG, setTopG] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpenAiParams({
                model: model,
                temperature: temperature,
                max_tokens: maxTokens,
                frequency_penalty: frequencyPenalty,
                top_p: topG,
            });
        }, 400);
        return () => clearTimeout(timeout);
    }, [model, temperature, maxTokens, frequencyPenalty, topG])

    return <Sheet sx={{borderRight: '1px solid', borderColor: 'divider', overflowY: 'scroll', width: "25rem", p: 3}}>
        <Divider sx={{mb: 2}}><Chip variant="outlined">Settings</Chip></Divider>

        <Box sx={{my: 2, mb: 3}}>
            <Typography component="div" level="title-sm" sx={{mb: 1}}>Model:</Typography>
            <Select defaultValue={model} size="sm" onChange={(event, value) => setModel(value)} sx={{}}>
                <Option value="gpt-3.5-turbo">gpt-3.5-turbo</Option>
                <Option value="gpt-3.5-turbo-0301">gpt-3.5-turbo-0301</Option>
                <Option value="gpt-3.5-turbo-0613">gpt-3.5-turbo-0613</Option>
                <Option value="gpt-3.5-turbo-1106">gpt-3.5-turbo-1106</Option>
                <Option value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</Option>
                <Option value="gpt-3.5-turbo-16k-0613">gpt-3.5-turbo-16k-0613</Option>
                <Option value="gpt-4" disabled>gpt-4</Option>
                <Option value="gpt-4-0613" disabled>gpt-4-0613</Option>
                <Option value="gpt-4-1106-preview" disabled>gpt-4-1106-preview</Option>
                <Option value="gpt-4-32k" disabled>gpt-4-32k</Option>
                <Option value="gpt-4-32k-0613" disabled>gpt-4-32k-0613</Option>
            </Select>
        </Box>

        <Box sx={{my: 1}}>
            <Typography component="div" level="title-sm">Temperature: <Chip variant="soft" sx={{px: 2, mb: 0.2}}>{temperature}</Chip></Typography>
            <Slider
                value={temperature}
                onChange={(event, value) => setTemperature(value)}
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
            <Typography component="div" level="title-sm">Frequency Penalty: <Chip variant="soft" sx={{px: 2, mb: 0.2}}>{frequencyPenalty}</Chip></Typography>
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
            <Typography component="div" level="title-sm">Max tokens: <Chip variant="soft" sx={{px: 2, mb: 0.2}}>{maxTokens}</Chip></Typography>
            <Slider
                value={maxTokens}
                onChange={(event, value) => setMaxTokens(value)}
                size="sm"
                variant="solid"
                defaultValue={maxTokens}
                step={1}
                min={0}
                max={3000}
                valueLabelDisplay="auto"
                sx={{
                    "--Slider-thumbWidth": "10px",
                    "--Slider-thumbSize": "20px"
                }}
            />
        </Box>

        <Box sx={{my: 1}}>
            <Typography component="div" level="title-sm">Top_p: <Chip variant="soft" sx={{px: 2, mb: 0.2}}>{topG}</Chip></Typography>
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
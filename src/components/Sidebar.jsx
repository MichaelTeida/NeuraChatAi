import {Divider, Select, Sheet, Slider, Typography, Option, Box, Chip, Tooltip, IconButton} from "@mui/joy";
import {useEffect, useState} from "react";
import {setOpenAiParams} from "../lib/OpenAi.jsx";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Sidebar = () => {
    const [model, setModel] = useState('gpt-3.5-turbo');
    const [temperature, setTemperature] = useState(0.7);
    const [maxTokens, setMaxTokens] = useState(500);
    const [frequencyPenalty, setFrequencyPenalty] = useState(0.01);
    const [topP, setTopP] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpenAiParams({
                model: model,
                temperature: temperature,
                max_tokens: maxTokens,
                frequency_penalty: frequencyPenalty,
                top_p: topP,
            });
        }, 400);
        return () => clearTimeout(timeout);
    }, [model, temperature, maxTokens, frequencyPenalty, topP])

    return <Sheet sx={{display: {xs: "none", md: "flow"}, borderRight: '1px solid', borderColor: 'divider', overflowY: 'scroll', width: "25rem", p: 3}}>
        <Divider sx={{mb: 2}}><Chip variant="outlined">Settings</Chip></Divider>

        <Box sx={{my: 2, mb: 3}}>
            <Box sx={{mb: 1}} display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="div" level="title-sm" >Model:</Typography>
                <Tooltip title={<div>Choose the AI language model for your chat. <br/>Different models have varying capabilities and performance.</div>}
                         size="sm" placement="top"  sx={{ whiteSpace: 'pre-line', textAlign: "center", p: 1}}>
                    <IconButton size="sm" sx={{borderRadius: 40}}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="div" level="title-sm">Temperature: <Chip variant="soft">{temperature}</Chip></Typography>
                <Tooltip title={<div>Control the randomness of AI responses. Higher values (e.g., 0.8) make output
                    more<br/> diverse, while lower values (e.g., 0.2) yield focused and deterministic replies.<br/>
                    Adjust alongside top-p, but not both. (Default: 1)</div>}
                         size="sm" placement="top"  sx={{ whiteSpace: 'pre-line', textAlign: "center", p: 1}}>
                    <IconButton size="sm" sx={{borderRadius: 40}}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="div" level="title-sm">Frequency Penalty: <Chip variant="soft">{frequencyPenalty}</Chip></Typography>
                <Tooltip title={<div>Influence tendency to introduce new topics.<br/> Positive values (0 to 2.0)
                    penalize new tokens based on their presence in the text,<br/> encouraging the AI to explore and
                    discuss fresh ideas. (Default: 0)</div>}
                         size="sm" placement="top"  sx={{ whiteSpace: 'pre-line', textAlign: "center", p: 1}}>
                    <IconButton size="sm" sx={{borderRadius: 40}}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="div" level="title-sm">Max tokens: <Chip variant="soft">{maxTokens}</Chip></Typography>
                <Tooltip title={<div>Limit the total tokens generated in chat completion.<br/> The sum of input and
                    output tokens is restricted by the context length.<br/> Adjust this to manage the length of
                    your AI-generated responses.</div>}
                         size="sm" placement="top"  sx={{ whiteSpace: 'pre-line', textAlign: "center", p: 1}}>
                    <IconButton size="sm" sx={{borderRadius: 40}}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
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
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="div" level="title-sm">Top_p: <Chip variant="soft">{topP}</Chip></Typography>
                <Tooltip title={<div>Balance response diversity. A value between 0 and 1 dictates nucleus
                    sampling, <br/> where the model considers tokens within the top p probability mass.<br/> For
                    instance, 0.1 focuses on the top 10% probability tokens.<br/> Consider adjusting top-p or
                    temperature, but not both. (Default: 1)</div>}
                         size="sm" placement="top" sx={{whiteSpace: 'pre-line', textAlign: "center", p: 1}}>
                    <IconButton size="sm" sx={{borderRadius: 40}}>
                        <InfoOutlinedIcon/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Slider
                value={topP}
                onChange={(event, value) => setTopP(value)}
                size="sm"
                variant="solid"
                defaultValue={topP}
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
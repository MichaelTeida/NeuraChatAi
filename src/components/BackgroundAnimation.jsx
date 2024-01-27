import {Box, useColorScheme} from "@mui/joy";
import '../styles/backgroundAnimation.scss'
import {useEffect, useState} from "react";

function BackgroundAnimation() {
    const {mode} = useColorScheme();
    const [opacity, setOpacity] = useState("10%")

    useEffect(() => {
        mode === 'light' ? setOpacity("20%") : setOpacity("40%")
    },[mode])

    return (
            <Box sx={{opacity: opacity}} className="background">
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
                <Box component="span"></Box>
        </Box>
    );
}

export default BackgroundAnimation;
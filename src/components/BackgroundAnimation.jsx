import {Box, useColorScheme} from "@mui/joy";
import '../styles/backgroundAnimation.scss'
import {useEffect, useState} from "react";

function BackgroundAnimation() {
    const {mode} = useColorScheme();
    const [opacity, setOpacity] = useState("10%")

    useEffect(() => {
        mode === 'light' ? setOpacity("20%") : setOpacity("40%")
    },[mode])

    const generateBoxes = () => {
        return Array.from({ length: 20 }, (_, index) => (
            <Box
                key={index}
                component="span"
            ></Box>
        ));
    };

    const generateBoxesWithSx = () => {
        return Array.from({ length: 19 }, (_, index) => (
            <Box
                key={index}
                component="span"
                sx={{ display: { xs: "none", md: "inline" } }}
            ></Box>
        ));
    };

    return (
            <Box sx={{opacity: opacity}} className="background">
                {generateBoxes()}
                {generateBoxesWithSx()}
        </Box>
    );
}

export default BackgroundAnimation;
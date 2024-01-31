import {useEffect, useState} from 'react'
import {Box, Button, useColorScheme} from '@mui/joy';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';


function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = useState(false);

    // necessary for server-side rendering
    // because mode is undefined on the server
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
            sx={{p: {xs: 1, md: "auto"}, pr: {xs: 0, md: "inherit"}}}
        >
            {mode === 'light' ? <DarkModeRoundedIcon sx={{mr: 1}} /> : <LightModeIcon sx={{mr: 1}}/>}
            <Box sx={{m: 0, display: {xs: 'none', md: 'initial'}}}>{mode === 'light' ? 'Turn dark' : 'Turn light'}</Box>
        </Button>
    );
}

export default ModeToggle
import {extendTheme} from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                background: {
                    body: '#cddbf6'
                }
            }
        },
        dark: {
            palette: {
                background: {
                    body: '#071124'
                }
            }
        }
    }
})

export default theme;
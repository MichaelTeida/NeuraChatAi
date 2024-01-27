import {Typography, Box, Container, List, ListItem, ListItemDecorator} from "@mui/joy";
import logoNeuraChatAi from "../assets/logo NeuraChatAi.png"
import robotImg from "../assets/Robot woman graphics.webp"

export function About() {
    return (
        <Container sx={{display: "flex", flexDirection: {sx: "column", md: "row"}, justifyContent: "space-between", alignItems: "center", minHeight: 'calc(100dvh - var(--Header-height))'}}>
            <Box sx={{flex: 5, display: "flex", gap: 2, flexWrap: "wrap"}}>
                <Typography component="h1" level="h1">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores dolore et fuga id
                    iusto modi molestias nobis odit quae.
                </Typography>
                <Box sx={{display: 'flex', flexDirection: {sx: "column", md: "row"}}}>
                    <List aria-labelledby="advantages">
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator> Lorem ipsum dolor.
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator> Lorem ipsum dolor.
                        </ListItem>
                    </List>
                    <List aria-labelledby="advantages">
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator> Lorem ipsum dolor.
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator> Lorem ipsum dolor.
                        </ListItem>
                    </List>
                </Box>
                <Typography>Supported by:</Typography>
                <Box component="img" src={logoNeuraChatAi} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 100, md: 100},
                }}/>
            </Box>
            <Box sx={{flex: 7}}>
                <Box component="img" src={robotImg} alt={"Logo NeuraChatAi"} sx={{
                    maxWidth: {xs: 700, md: 700},
                }}/>
            </Box>
        </Container>
    );
}

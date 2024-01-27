import {Typography, Box, Container, List, ListItem, ListItemDecorator, AspectRatio} from "@mui/joy";
import robotImg from "../assets/Robot woman graphics.webp"
import poweredbyopenaibadgeoutlinedondark from "../assets/powered-by-openai-badge-outlined-on-dark.svg";
import poweredbyopenaibadgeoutlinedonlight from "../assets/powered-by-openai-badge-outlined-on-light.svg";
import {useColorScheme} from "@mui/joy";
import {useEffect, useState} from "react";
import BackgroundAnimation from "../components/BackgroundAnimation.jsx";

export function About() {
    const {mode} = useColorScheme();
    const [openAiBadge, setOpenAiBadge] = useState(mode)

    useEffect(() => {
        mode === 'light' ? setOpenAiBadge(poweredbyopenaibadgeoutlinedonlight) : setOpenAiBadge(poweredbyopenaibadgeoutlinedondark)
    },[mode])

    return (
        <Container sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, justifyContent: "space-between", alignItems: "center", minHeight: 'calc(100dvh - var(--Header-height))'}}>
            <Box sx={{zIndex: "2",flex: 5, display: "flex", flexDirection: {xs: "column", md: "row"}, gap: 2, flexWrap: "wrap"}}>
                <Typography component="h1" level="h1">
                    Welcome to NeuraChat
                </Typography>
                <Typography>
                    NeuraChat is your ultimate AI companion, revolutionizing the way you interact online. With cutting-edge technology and intuitive design, NeuraChat offers a seamless chat experience unlike any other. Explore the possibilities with NeuraChat today!
                </Typography>
                <Box sx={{display: 'flex', flexDirection: {xs: "column", md: "row"}}}>
                    <List aria-labelledby="advantages">
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator>Limitless Possibilities
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator>AI-powered conversations.
                        </ListItem>
                    </List>
                    <List aria-labelledby="advantages">
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator>Intelligent Problem-Solving
                        </ListItem>
                        <ListItem>
                            <ListItemDecorator>🧅</ListItemDecorator>User-friendly features.
                        </ListItem>
                    </List>
                </Box>
                <Box maxWidth={350} component="img" src={openAiBadge} alt={"Logo NeuraChatAi"}/>
            </Box>
            <Box sx={{zIndex: "2", flex: 7}}>
                <AspectRatio
                    objectFit="contain"
                    ratio={1}
                    variant="plain"
                    maxHeight={400}
                    sx={(theme) => ({
                        minWidth: 400,
                        alignSelf: 'stretch',
                        [theme.breakpoints.up(834)]: {
                            alignSelf: 'initial',
                            flexGrow: 1,
                            '--AspectRatio-maxHeight': '800px',
                            '--AspectRatio-minHeight': '800px',
                        },
                    })}
                >
                    <Box component="img" src={robotImg} alt={"Logo NeuraChatAi"} />
                </AspectRatio>
            </Box>
            <BackgroundAnimation/>
        </Container>
    );
}
